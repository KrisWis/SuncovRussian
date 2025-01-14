interface YandexCloudAPIItemSize {
  url: string;
  name: string;
}

export interface YandexCloudAPIItem {
  antivirus_status: string;
  size: number;
  comment_ids: {
    private_resource: string;
    public_resource: string;
  };
  name: string;
  exif: object;
  created: string;
  resource_id: string;
  modified: string;
  mime_type: string;
  sizes: YandexCloudAPIItemSize[];
  file: string;
  media_type: 'document';
  preview: string;
  path: string;
  sha256: string;
  type: 'file';
  md5: string;
  revision: number;
}

declare global {
  const pdfjsLib: {
    getDocument: (url: string | { url: string }) => {
      promise: Promise<{
        numPages: number;
        getPage: (pageNum: number) => Promise<{
          getViewport: (params: { scale: number }) => {
            width: number;
            height: number;
          };
          render: (params: {
            canvasContext: CanvasRenderingContext2D;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            viewport: any;
          }) => void;
        }>;
      }>;
    };

    GlobalWorkerOptions: { workerSrc: string };
  };
}

export {};
