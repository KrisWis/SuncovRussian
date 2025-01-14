/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import { PageLoading } from '../ui-kit/PageLoading/PageLoading';
import { Flex } from './Stack';

interface PDFViewerProps {
  url: string;
}

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js`;

export const PDFViewer: React.FC<PDFViewerProps> = ({ url }) => {
  // Отображение PDF файла на странице
  const parentRef = useRef<HTMLDivElement>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadingTask = pdfjsLib.getDocument(url);

    setIsLoading(true);

    loadingTask.promise.then((pdf: any) => {
      const totalPages = pdf.numPages;

      for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d')!;
        const scale = 1.5;

        pdf.getPage(pageNum).then((page: any) => {
          const viewport = page.getViewport({ scale: scale });

          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };
          page.render(renderContext);
        });

        setIsLoading(false);

        const appendChildTimeout = setTimeout(() => {
          parentRef.current!.appendChild(canvas);
          clearTimeout(appendChildTimeout);
        }, 1);
      }
    });
  }, [url]);

  // Очистка DOM всего родителя при изменении ссылки для избежения большого кол-ва ненужных элементов
  useEffect(() => {
    if (parentRef.current) {
      parentRef.current.innerHTML = '';
    }
  }, [url]);

  // При загрузке страницы показываем анимацию загрузки
  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <Flex align="start" direction="column" ref={parentRef}>
      <></>
    </Flex>
  );
};
