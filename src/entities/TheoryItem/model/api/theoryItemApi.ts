import { UTApi } from '@/shared/api/UTApi/api';
import { getTheoryResponse } from './types';

const theoryItemApi = UTApi.injectEndpoints({
  endpoints: (build) => ({
    getTheory: build.query<getTheoryResponse, string>({
      query: (fileKey) => ({
        url: `/v6/pollUpload/${fileKey}`,
      }),

      keepUnusedDataFor: 120,
    }),
  }),
});

export const { useGetTheoryQuery } = theoryItemApi;
