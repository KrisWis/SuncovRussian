import { memo, useEffect, useMemo, useState } from 'react';
import { useGetAllTheoriesMutation } from '../api/theoryPageApi';
import { PageLoading } from '@/shared/ui/PageLoading/ui/PageLoading';
import { ErrorComponent } from '@/shared/ui/ErrorComponent';
import { Flex } from '@/shared/lib/Stack';
import * as styles from './TheoryPage.module.scss';
import { mobileMediaQueryWidth } from '@/shared/const/global';
import { UTAPIFileInList } from '@/shared/api/UTApi/types';
import { TheoryPageContext } from '../model/context/TheoryPageContext';
import { Page } from '@/widgets/Page';
import { TheorySidebar } from './TheorySidebar/TheorySidebar';
import { TheoryItem } from '@/entities/TheoryItem';

export const TheoryPage: React.FC = memo((): React.JSX.Element => {
  // Получение всех pdf файлов с теорией с Яндекс Диска
  const [getTheories, { data, isError, isLoading }] =
    useGetAllTheoriesMutation();

  useEffect(() => {
    getTheories();
  }, [getTheories]);

  const [pdfFiles, setPdfFiles] = useState<UTAPIFileInList[]>([]);

  // Фильтрация полученных файлов
  useEffect(() => {
    if (data) {
      const dataPfdFiles = data.files.filter((item) =>
        item.name.endsWith('.pdf'),
      );

      setPdfFiles(dataPfdFiles);
    }
  }, [data]);

  // Обработка выбора раздела пользователем
  const [selectedSection, setSelectedSection] = useState<string>('');

  const selectedPdfFile = useMemo(
    () => pdfFiles.find((file) => file.name.slice(0, -4) === selectedSection),
    [pdfFiles, selectedSection],
  );

  return (
    <Page>
      {isLoading ? (
        <PageLoading />
      ) : isError ? (
        <ErrorComponent withHeader={false} />
      ) : (
        <TheoryPageContext.Provider
          value={{ selectedSection, setSelectedSection }}
        >
          <Flex
            direction={mobileMediaQueryWidth.matches ? 'column' : 'row'}
            relative
            maxHeight
            width="100"
            gap={mobileMediaQueryWidth.matches ? '20' : '0'}
          >
            {pdfFiles.length > 0 && (
              <TheorySidebar
                pdfFilesTitles={pdfFiles.map((item) => item.name.slice(0, -4))}
              />
            )}

            {selectedPdfFile && (
              <Flex
                className={styles.TheoryPage__content}
                relative
                maxHeight
                width={mobileMediaQueryWidth.matches ? '100' : '85'}
                justify="center"
                align="start"
              >
                <TheoryItem fileKey={selectedPdfFile.key} />
              </Flex>
            )}
          </Flex>
        </TheoryPageContext.Provider>
      )}
    </Page>
  );
});

TheoryPage.displayName = 'TheoryPage';
