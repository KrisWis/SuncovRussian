import { ThunkConfig } from '@/shared/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  QueryDefinition,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query';
import { StartQueryActionCreator } from '../types/global';

export interface getDataParams<Returned> {
  requestID: string;
  getRequest: StartQueryActionCreator<
    QueryDefinition<
      void,
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        object,
        FetchBaseQueryMeta
      >,
      never,
      Returned,
      'RTKApi'
    >
  >;
}

export const getData = <Returned>(params: getDataParams<Returned>) =>
  createAsyncThunk<Returned, void, ThunkConfig<string>>(
    params.requestID,
    async (_, thunkApi) => {
      const { rejectWithValue, dispatch } = thunkApi;

      try {
        const response = await dispatch(params.getRequest()).unwrap();

        return response;
      } catch (e) {
        console.error(e);
        return rejectWithValue('');
      }
    },
  );
