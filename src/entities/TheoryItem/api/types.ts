import { UTAPIFileForUpload } from '@/shared/api/UTApi/types';

type getTheoriesStatus = 'still working' | 'done';

export interface getTheoryResponse {
  status: getTheoriesStatus;
  fileData: UTAPIFileForUpload;
  metadata: null;
  callbackData: null;
}
