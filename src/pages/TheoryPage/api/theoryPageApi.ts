import { UTApi } from '@/shared/api/UTApi/api';
import { getAllTheoriesResponse } from './types';

const theoryPageApi = UTApi.injectEndpoints({
  endpoints: (build) => ({
    getAllTheories: build.mutation<getAllTheoriesResponse, void>({
      query: () => ({
        url: `/listFiles`,
        method: 'POST',
        body: {},
      }),
    }),
  }),
});

export const { useGetAllTheoriesMutation } = theoryPageApi;
