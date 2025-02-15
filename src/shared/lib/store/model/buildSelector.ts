/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowEqual, useSelector } from 'react-redux';
import { StateSchema } from '../../../store/config/types';

type Selector<T, Args extends any[]> = (state: StateSchema, ...args: Args) => T;
type Hook<T, Args extends any[]> = (...args: Args) => T;
type Result<T, Args extends any[]> = [Hook<T, Args>, Selector<T, Args>];

export const buildSelector = <T, Args extends any[] = []>(
  selector: Selector<T, Args>,
  isShallowEqual?: boolean,
): Result<T, Args> => {
  const useSelectorHook: Hook<T, Args> = (...args: Args) => {
    const ShallowEqual = isShallowEqual ? shallowEqual : undefined;

    return useSelector(
      (state: StateSchema) => selector(state, ...args),
      ShallowEqual,
    );
  };

  return [useSelectorHook, selector];
};
