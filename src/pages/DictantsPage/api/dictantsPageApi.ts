import { DictantType } from '@/features/Dictant';
import { RTKApi } from '@/shared/api/RTKApi/api';

const dictantsPageApi = RTKApi.injectEndpoints({
  endpoints: (build) => ({
    getAlldictants: build.query<DictantType[], void>({
      query: () => ({
        url: `/dictations`,
        method: 'GET',
      }),
    }),
  }),
});

export const getAllDictants = dictantsPageApi.endpoints.getAlldictants.initiate;
