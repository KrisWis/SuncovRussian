import { bindActionCreators, createSlice } from '@reduxjs/toolkit';
import { SliceCaseReducers, CreateSliceOptions } from '@reduxjs/toolkit/dist';
import { useMemo } from 'react';
import { useAppDispatch } from '@/app/store/AppStore';

export const buildSlice = <
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string,
>(
  options: CreateSliceOptions<State, CaseReducers, Name>,
) => {
  const slice = createSlice(options);

  const useActions = (): typeof slice.actions => {
    const dispatch = useAppDispatch();

    return useMemo(
      () => bindActionCreators(slice.actions, dispatch),
      [dispatch],
    );
  };

  return {
    ...slice,
    useActions,
  };
};
