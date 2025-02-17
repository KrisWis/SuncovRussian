import { ThunkConfig } from '@/shared/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  QueryDefinition,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  StartQueryActionCreator,
} from '@reduxjs/toolkit/query';

export const getData = <Returned>(
  requestID: string,
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
  >,
) =>
  createAsyncThunk<Returned, void, ThunkConfig<string>>(
    requestID,
    async (_, thunkApi) => {
      const { rejectWithValue, dispatch } = thunkApi;

      try {
        const response = await dispatch(getRequest()).unwrap();

        return response;
      } catch (e) {
        console.log(e);
        return rejectWithValue('');
      }
    },
  );
