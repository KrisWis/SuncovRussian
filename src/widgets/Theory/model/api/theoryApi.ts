import { yandexCloudApi } from '@/shared/api/yandexCloudApi/api';
import { YandexCloudAPIItem } from '@/shared/api/yandexCloudApi/types';

interface getTheoriesResponse {
  items: YandexCloudAPIItem[];
  limit: number;
  offset: number;
}

export const theoriesFolderName: string = 'SuncovRussian';

const theoryApi = yandexCloudApi.injectEndpoints({
  endpoints: (build) => ({
    getTheories: build.query<getTheoriesResponse, void>({
      query: () => ({
        url: `/files?media_type=document&sort=path"disk:/${theoriesFolderName}/*"`,
      }),
    }),
  }),
});

export const { useGetTheoriesQuery } = theoryApi;
