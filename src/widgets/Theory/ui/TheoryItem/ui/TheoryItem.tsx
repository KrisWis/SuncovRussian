import { PDFViewer } from '@/shared/lib/PDFViewer';
import { useGetTheoryQuery } from '../../../model/api/theoryApi';
import { TheoryItemProps } from '../model/types';
import { memo } from 'react';
import { PageLoading } from '@/shared/ui-kit/PageLoading/PageLoading';
import { ErrorComponent } from '@/shared/ui-kit/ErrorComponent';

export const TheoryItem: React.FC<TheoryItemProps> = memo(
  ({ fileKey }): React.JSX.Element => {
    // Получение ссылки на файл по ключу
<<<<<<< HEAD
<<<<<<< HEAD
    const { data, isLoading, isError, isFetching } = useGetTheoryQuery(fileKey);

    // Обработка события загрузки файлов
    if (isLoading || isFetching) {
=======
    const { data, isLoading, isError } = useGetTheoryQuery(fileKey);

    // Обработка события загрузки файлов
    if (isLoading) {
>>>>>>> 4fa07a1 (Replace yandex cloud api to uploadthingapi, rewrite api requests, add dotenvplugin for webpack. Theory is finished, but have some details to fix.)
=======
    const { data, isLoading, isError, isFetching } = useGetTheoryQuery(fileKey);

    // Обработка события загрузки файлов
    if (isLoading || isFetching) {
>>>>>>> 1df825a (Remove loki from project.)
      return <PageLoading />;
    }

    // Обработка ошибки загрузки файлов
    if (isError) {
      return <ErrorComponent />;
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 04df36d (Add cypress, e2e tests for theory block.)
    return (
      <div data-testid="TheoryItem">
        {data?.fileData && <PDFViewer url={data?.fileData.fileUrl} />}
      </div>
    );
<<<<<<< HEAD
=======
    return <>{data?.fileData && <PDFViewer url={data?.fileData.fileUrl} />}</>;
>>>>>>> 4fa07a1 (Replace yandex cloud api to uploadthingapi, rewrite api requests, add dotenvplugin for webpack. Theory is finished, but have some details to fix.)
=======
>>>>>>> 04df36d (Add cypress, e2e tests for theory block.)
  },
);

TheoryItem.displayName = 'TheoryItem';
