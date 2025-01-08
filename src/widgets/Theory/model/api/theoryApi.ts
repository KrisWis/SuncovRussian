import { yandexCloudApi } from '@/shared/api/yandexCloudApi/api';
import { YandexCloudAPIItem } from '@/shared/api/yandexCloudApi/types';

interface getTheoriesResponse {
  items: YandexCloudAPIItem[];
  limit: number;
  offset: number;
}

export const theoriesFolderName: string = 'theory';

const theoryApi = yandexCloudApi.injectEndpoints({
  endpoints: (build) => ({
    getTheories: build.query<getTheoriesResponse, void>({
      query: () => ({
        url: `/files?media_type=document&limit=100`,
      }),
    }),
  }),
});

export const { useGetTheoriesQuery } = theoryApi;
