/* eslint-disable @typescript-eslint/no-explicit-any */

import { ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import { QueryActionCreatorResult, QueryArgFrom, QueryDefinition, StartQueryActionCreatorOptions } from "@reduxjs/toolkit/query";

export type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export type StartQueryActionCreator<D extends QueryDefinition<any, any, any, any, any>> = (arg: QueryArgFrom<D>, options?: StartQueryActionCreatorOptions) => ThunkAction<QueryActionCreatorResult<D>, any, any, UnknownAction>;