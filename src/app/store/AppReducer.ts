import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './types';
import { yandexCloudApi } from '@/shared/api/yandexCloudApi/api';

export const RootReducer: ReducersMapObject<StateSchema> = {
  [yandexCloudApi.reducerPath]: yandexCloudApi.reducer,
};
