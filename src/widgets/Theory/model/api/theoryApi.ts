import { yandexCloudApi } from '@/shared/api/yandexCloudApi/api';
import { YandexCloudAPIItem } from '@/shared/api/yandexCloudApi/types';

interface getTheoriesResponse {
  items: YandexCloudAPIItem[];
  limit: number;
  offset: number;
}

// TODO: сделать так, чтобы русские названия тоже нормальными были

// TODO: сделать так, чтобы сначала подгружались только названия, а при клике на название подгружался уже сам файл
export const theoriesFolderName: string = 'теория';

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
