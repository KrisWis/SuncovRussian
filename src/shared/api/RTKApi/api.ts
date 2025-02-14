import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const RTKApiURL: string = 'https://сунцов-никита.рф/api/v1';

export const RTKApi = createApi({
  reducerPath: 'RTKApi',
  baseQuery: fetchBaseQuery({
    baseUrl: RTKApiURL,
  }),
  endpoints: () => ({}),
});
