import { createSlice, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './types';

export const GlobalSlice = createSlice({
  name: 'GlobalSlice',
  reducers: {},
  initialState: {},
});

export const { reducer: GlobalReducer } = GlobalSlice;

export const RootReducer: ReducersMapObject<StateSchema> = {
  Global: GlobalReducer,
};
