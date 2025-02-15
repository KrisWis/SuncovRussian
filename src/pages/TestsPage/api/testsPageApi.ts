import { TestInterface } from '@/features/Test';
import { RTKApi } from '@/shared/api/RTKApi/api';

const testsPageApi = RTKApi.injectEndpoints({
  endpoints: (build) => ({
    getAllTests: build.query<TestInterface[], void>({
      query: () => ({
        url: `/tests`,
        method: 'GET',
      }),
    }),
  }),
});

export const getAllTests = testsPageApi.endpoints.getAllTests.initiate;
