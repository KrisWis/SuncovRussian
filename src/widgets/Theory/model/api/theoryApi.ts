import { UTApi } from '@/shared/api/UTApi/api';
import { getAllTheoriesResponse, getTheoryResponse } from './types';

<<<<<<< HEAD
interface getTheoriesResponse {
  items: YandexCloudAPIItem[];
  limit: number;
  offset: number;
}

export const theoriesFolderName: string = 'SuncovRussian';

const theoryApi = yandexCloudApi.injectEndpoints({
=======
const theoryApi = UTApi.injectEndpoints({
>>>>>>> 4fa07a1 (Replace yandex cloud api to uploadthingapi, rewrite api requests, add dotenvplugin for webpack. Theory is finished, but have some details to fix.)
  endpoints: (build) => ({
    getAllTheories: build.mutation<getAllTheoriesResponse, void>({
      query: () => ({
<<<<<<< HEAD
        url: `/files?media_type=document&sort=path"disk:/${theoriesFolderName}/*"`,
=======
        url: `/v6/listFiles`,
        method: 'POST',
        body: {},
>>>>>>> 4fa07a1 (Replace yandex cloud api to uploadthingapi, rewrite api requests, add dotenvplugin for webpack. Theory is finished, but have some details to fix.)
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
