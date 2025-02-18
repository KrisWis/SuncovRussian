import { RTKApi } from '@/shared/api/RTKApi/api';
import { PartsOfSpeachType } from '../model/types/types';

const partsOfSpeachPageApi = RTKApi.injectEndpoints({
  endpoints: (build) => ({
    getAllPartsOfSpeach: build.query<PartsOfSpeachType, void>({
      query: () => ({
        url: `/dictations`,
        method: 'GET',
      }),
    }),
  }),
});

export const getAllPartsOfSpeach =
  partsOfSpeachPageApi.endpoints.getAllPartsOfSpeach.initiate;
