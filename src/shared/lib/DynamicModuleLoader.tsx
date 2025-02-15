import { Reducer } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { StateSchema, StateSchemaKey } from '../store/config/types';
import { ReduxStoreWithManager } from '../store/config/AppStore';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface DynamicModuleLoaderProps {
  children: React.ReactNode;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount = true,
}) => {
  const store = useStore() as ReduxStoreWithManager;
  const mountedReducers = store.reducerManager.getMountedReducers();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKey];
      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);
        });
      }
    };
  }, [mountedReducers, reducers, removeAfterUnmount, store.reducerManager]);

  return <>{children}</>;
};
DynamicModuleLoader.displayName = 'DynamicModuleLoader';
