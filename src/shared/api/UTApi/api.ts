import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const UTApiURL: string = 'https://api.uploadthing.com';

// TODO: когда появится бекенд, то сделать так, чтобы апи ключ брался не из .env, а отправлялся запрос на бекенд и брался уже оттуда.
export const UTApi = createApi({
  reducerPath: 'UTApi',
  baseQuery: fetchBaseQuery({
    baseUrl: UTApiURL,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('X-Uploadthing-Api-Key', process.env.UT_API_TOKEN!);
      return headers;
    },
  }),
  endpoints: () => ({}),
});
