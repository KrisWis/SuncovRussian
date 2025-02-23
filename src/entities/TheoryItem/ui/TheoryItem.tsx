import { memo } from 'react';
import { PageLoading } from '@/shared/ui/PageLoading/ui/PageLoading';
import { ErrorComponent } from '@/shared/ui/ErrorComponent';
import { PDFViewer } from '@/shared/lib/PDFViewer';
import { useGetTheoryQuery } from '../api/theoryItemApi';

interface TheoryItemProps {
  fileKey: string;
}

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
      return <ErrorComponent withHeader={false} />;
    }

    return (
      <div data-testid="TheoryItem">
        {data?.fileData && <PDFViewer url={data?.fileData.fileUrl} />}
      </div>
    );
  },
);

TheoryItem.displayName = 'TheoryItem';
