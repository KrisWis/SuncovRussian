import { UTAPIFileForUpload, UTAPIFileInList } from '@/shared/api/UTApi/types';

export interface getAllTheoriesResponse {
  hasMore: boolean;
  files: UTAPIFileInList[];
}

type getTheoriesStatus = 'still working' | 'done';

export interface getTheoryResponse {
  status: getTheoriesStatus;
  fileData: UTAPIFileForUpload;
  metadata: null;
  callbackData: null;
}
