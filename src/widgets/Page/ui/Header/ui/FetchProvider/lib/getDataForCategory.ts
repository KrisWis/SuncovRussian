import { StateSchema } from '@/shared/lib/store';
import { getData, getDataParams } from '@/shared/services/getData';
import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';

export const getDataForCategory = async <Returned>(
  params: getDataParams<Returned>,
  dispatch: ThunkDispatch<StateSchema, undefined, UnknownAction> &
    Dispatch<UnknownAction>,
): Promise<Awaited<Returned>> => {
  const asyncThunk = getData<Returned>({
    requestID: params.requestID,
    getRequest: params.getRequest,
  });
  const testsData = await dispatch(asyncThunk()).unwrap();

  return testsData;
};
