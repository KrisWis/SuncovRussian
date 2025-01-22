import { UTAPIFileInList } from '@/shared/api/UTApi/types';

export interface getAllTheoriesResponse {
  hasMore: boolean;
  files: UTAPIFileInList[];
}
