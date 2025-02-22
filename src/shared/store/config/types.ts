/* eslint-disable ulbi-tv-plugin/layer-imports */
import { TrainerPageSliceSchema } from '@/pages/TrainerPage';
import { RTKApi } from '@/shared/api/RTKApi/api';
import { UTApi } from '@/shared/api/UTApi/api';

export interface StateSchema {
  [UTApi.reducerPath]: ReturnType<typeof UTApi.reducer>;
  [RTKApi.reducerPath]: ReturnType<typeof RTKApi.reducer>;
  Trainer?: TrainerPageSliceSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type StateSchemas = TrainerPageSliceSchema;
