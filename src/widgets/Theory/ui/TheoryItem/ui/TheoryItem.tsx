import { PDFViewer } from '@/shared/lib/PDFViewer';
import { useGetTheoryQuery } from '../../../model/api/theoryApi';
import { TheoryItemProps } from '../model/types';
import { memo } from 'react';
import { PageLoading } from '@/shared/ui-kit/PageLoading/PageLoading';
import { ErrorComponent } from '@/shared/ui-kit/ErrorComponent';

export const TheoryItem: React.FC<TheoryItemProps> = memo(
  ({ fileKey }): React.JSX.Element => {
    // Получение ссылки на файл по ключу
    const { data, isLoading, isError, isFetching } = useGetTheoryQuery(fileKey);

    // Обработка события загрузки файлов
    if (isLoading || isFetching) {
      return <PageLoading />;
    }

    // Обработка ошибки загрузки файлов
    if (isError) {
      return <ErrorComponent />;
    }

    return <>{data?.fileData && <PDFViewer url={data?.fileData.fileUrl} />}</>;
  },
);

TheoryItem.displayName = 'TheoryItem';
