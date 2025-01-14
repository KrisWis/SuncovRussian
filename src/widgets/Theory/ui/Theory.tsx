import { memo, useEffect, useState } from 'react';
import {
  theoriesFolderName,
  useGetTheoriesQuery,
} from '../model/api/theoryApi';
import { YandexCloudAPIItem } from '@/shared/api/yandexCloudApi/types';
import { PDFViewer } from '@/shared/lib/PDFViewer';
import { PageLoading } from '@/shared/ui-kit/PageLoading/PageLoading';
import { ErrorComponent } from '@/shared/ui-kit/ErrorComponent';

export const Theory: React.FC = memo((): React.JSX.Element => {
  // Получение всех pdf файлов с теорией с Яндекс Диска
  const { data, isLoading, isError } = useGetTheoriesQuery();

  const [pdfItems, setPdfItems] = useState<YandexCloudAPIItem[]>([]);

  useEffect(() => {
    if (data) {
      const regex = new RegExp(`^disk:\\/${theoriesFolderName}\\/.*$`);

      const dataPfdItems = data.items.filter(
        (item) => item.name.endsWith('.pdf') && regex.test(item.path),
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
    <>
      {pdfItems.map((item) => (
        <PDFViewer key={item.name} url={item.file} />
      ))}
    </>
  );
});

Theory.displayName = 'Theory';
