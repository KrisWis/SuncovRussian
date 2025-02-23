import { useState } from 'react';
import { PageLoading } from '../ui/PageLoading/ui/PageLoading';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { ErrorComponent } from '../ui/ErrorComponent';

interface PDFViewerProps {
  url: string;
}

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export const PDFViewer: React.FC<PDFViewerProps> = ({ url }) => {
  // Отображение PDF файла на сайте
  const [numPages, setNumPages] = useState<number>();

  return (
    <Document
      error={<ErrorComponent withHeader={false} />}
      loading={<PageLoading />}
      file={url}
      onLoadSuccess={(document) => setNumPages(document.numPages)}
    >
      {Array.from(Array(numPages), (_, index) => (
        <Page
          loading={<PageLoading />}
          key={index + 1}
          pageNumber={index + 1}
        />
      ))}
    </Document>
  );
};
