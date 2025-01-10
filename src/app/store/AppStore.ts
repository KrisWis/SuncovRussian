import { configureStore, EnhancedStore, Reducer } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createReducerManager, ReducerManager } from './AppReducerManager';
import { RootReducer } from './AppReducer';
import { StateSchema } from './types';
import { UTApi } from '@/shared/api/UTApi/api';

const reducerManager = createReducerManager(RootReducer);

export const store = configureStore({
  reducer: reducerManager.reduce as Reducer<StateSchema>,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UTApi.middleware),
});

// @ts-expect-error EnhancedStore не имеет свойства reducerManager
store.reducerManager = reducerManager;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
