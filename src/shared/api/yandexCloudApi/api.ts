import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { YANDEX_CLOUD_OAUTH_TOKEN } from '../../config/tokens';

export const yandexCloudApiURL: string =
  'https://cloud-api.yandex.net/v1/disk/resources/';

export const yandexCloudApi = createApi({
  reducerPath: 'yandexCloudApi',
  baseQuery: fetchBaseQuery({
    baseUrl: yandexCloudApiURL,
    prepareHeaders: (headers) => {
      headers.set('Accept', 'application/json');
      headers.set('Content-Type', 'application/json');
      headers.set('Authorization', YANDEX_CLOUD_OAUTH_TOKEN);
      return headers;
    },
  }),
  endpoints: () => ({}),
});
