import { ReducersMapObject } from '@reduxjs/toolkit';
import { UTApi } from '@/shared/api/UTApi/api';
import { StateSchema } from './types';

export const RootReducer: ReducersMapObject<StateSchema> = {
  [UTApi.reducerPath]: UTApi.reducer,
};
