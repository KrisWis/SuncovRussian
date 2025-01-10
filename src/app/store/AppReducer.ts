import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './types';
import { UTApi } from '@/shared/api/UTApi/api';

export const RootReducer: ReducersMapObject<StateSchema> = {
  [UTApi.reducerPath]: UTApi.reducer,
};
