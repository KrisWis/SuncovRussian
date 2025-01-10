import { memo, useEffect, useMemo, useState } from 'react';
import { useGetAllTheoriesMutation } from '../model/api/theoryApi';
import { PageLoading } from '@/shared/ui-kit/PageLoading/PageLoading';
import { ErrorComponent } from '@/shared/ui-kit/ErrorComponent';
import { Flex } from '@/shared/lib/Stack';
import * as styles from './Theory.module.scss';
import { TheoryContext } from '../model/context/TheoryContext';
import { mobileMediaQueryWidth } from '@/shared/const/global';
import { TheorySidebar } from './TheorySidebar/ui/TheorySidebar';
import { UTAPIFileInList } from '@/shared/api/UTApi/types';
import { TheoryItem } from './TheoryItem';

export const Theory: React.FC = memo((): React.JSX.Element => {
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

  // Обработка события загрузки файлов
  if (isLoading) {
    return <PageLoading />;
  }

  // Обработка ошибки загрузки файлов
  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <TheoryContext.Provider value={{ selectedSection, setSelectedSection }}>
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
            className={styles.Theory__content}
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
    </TheoryContext.Provider>
  );
});

Theory.displayName = 'Theory';
