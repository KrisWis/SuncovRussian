import { UTApi } from '@/shared/api/UTApi/api';
import { getAllTheoriesResponse, getTheoryResponse } from './types';

const theoryApi = UTApi.injectEndpoints({
  endpoints: (build) => ({
    getAllTheories: build.mutation<getAllTheoriesResponse, void>({
      query: () => ({
        url: `/v6/listFiles`,
        method: 'POST',
        body: {},
      }),
    }),

    getTheory: build.query<getTheoryResponse, string>({
      query: (fileKey) => ({
        url: `/v6/pollUpload/${fileKey}`,
      }),

      keepUnusedDataFor: 120,
    }),
  }),
});

export const { useGetAllTheoriesMutation, useGetTheoryQuery } = theoryApi;
