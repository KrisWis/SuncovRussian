<<<<<<< HEAD
import { memo, useEffect, useState } from 'react';
import {
  theoriesFolderName,
  useGetTheoriesQuery,
} from '../model/api/theoryApi';
import { YandexCloudAPIItem } from '@/shared/api/yandexCloudApi/types';
import { PDFViewer } from '@/shared/lib/PDFViewer';
import { PageLoading } from '@/shared/ui-kit/PageLoading/PageLoading';
import { ErrorComponent } from '@/shared/ui-kit/ErrorComponent';
=======
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
>>>>>>> 4fa07a1 (Replace yandex cloud api to uploadthingapi, rewrite api requests, add dotenvplugin for webpack. Theory is finished, but have some details to fix.)

export const Theory: React.FC = memo((): React.JSX.Element => {
  // Получение всех pdf файлов с теорией с Яндекс Диска
  const [getTheories, { data, isError, isLoading }] =
    useGetAllTheoriesMutation();

<<<<<<< HEAD
  const [pdfItems, setPdfItems] = useState<YandexCloudAPIItem[]>([]);
=======
  useEffect(() => {
    getTheories();
  }, [getTheories]);

  const [pdfFiles, setPdfFiles] = useState<UTAPIFileInList[]>([]);
>>>>>>> 4fa07a1 (Replace yandex cloud api to uploadthingapi, rewrite api requests, add dotenvplugin for webpack. Theory is finished, but have some details to fix.)

  useEffect(() => {
    if (data) {
<<<<<<< HEAD
      const regex = new RegExp(`^disk:\\/${theoriesFolderName}\\/.*$`);

      const dataPfdItems = data.items.filter(
        (item) => item.name.endsWith('.pdf') && regex.test(item.path),
=======
      const dataPfdFiles = data.files.filter((item) =>
        item.name.endsWith('.pdf'),
>>>>>>> 4fa07a1 (Replace yandex cloud api to uploadthingapi, rewrite api requests, add dotenvplugin for webpack. Theory is finished, but have some details to fix.)
      );
      setPdfItems(dataPfdItems);
    }
  }, [data]);

  if (isLoading) {
    return <PageLoading />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
<<<<<<< HEAD
    <>
      {pdfItems.map((item) => (
        <PDFViewer key={item.name} url={item.file} />
      ))}
    </>
=======
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
>>>>>>> 4fa07a1 (Replace yandex cloud api to uploadthingapi, rewrite api requests, add dotenvplugin for webpack. Theory is finished, but have some details to fix.)
  );
});

Theory.displayName = 'Theory';
