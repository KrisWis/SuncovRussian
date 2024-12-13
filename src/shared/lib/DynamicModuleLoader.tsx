import { Reducer } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import {
  ReduxStoreWithManager,
  StoreSchema,
  StoreSchemaKey,
} from "../config/store/AppStore";

export type ReducersList = {
  [name in StoreSchemaKey]?: Reducer<NonNullable<StoreSchema[name]>>;
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
  const dispatch = useDispatch();
  const mountedReducers = store.reducerManager.getMountedReducers();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StoreSchemaKey];
      if (!mounted) {
        store.reducerManager.add(name as StoreSchemaKey, reducer);
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StoreSchemaKey);
        });
      }
    };
  }, [
    dispatch,
    mountedReducers,
    reducers,
    removeAfterUnmount,
    store.reducerManager,
  ]);

  return <>{children}</>;
};
DynamicModuleLoader.displayName = "DynamicModuleLoader";
