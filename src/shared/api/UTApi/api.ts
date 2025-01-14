import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const UTApiURL: string = 'https://api.uploadthing.com';

<<<<<<< HEAD
// TODO: когда появится бекенд, то сделать так, чтобы апи ключ брался не из .env, а отправлялся запрос на бекенд и брался уже оттуда.
=======
// TODO: сделать так, чтобы токен не попадал в сборку
>>>>>>> 4fa07a1 (Replace yandex cloud api to uploadthingapi, rewrite api requests, add dotenvplugin for webpack. Theory is finished, but have some details to fix.)
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
