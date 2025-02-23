import { UTApi } from '@/shared/api/UTApi/api';
import { getTheoryResponse } from './types';

const theoryItemApi = UTApi.injectEndpoints({
  endpoints: (build) => ({
    getTheory: build.query<getTheoryResponse, string>({
      query: (fileKey) => ({
        url: `/pollUpload/${fileKey}`,
      }),

      keepUnusedDataFor: 120,
    }),
  }),
});

export const { useGetTheoryQuery } = theoryItemApi;
