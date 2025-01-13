import { TrainerPageSliceSchema } from '@/pages/TrainerPage';
import { UTApi } from '@/shared/api/UTApi/api';

export interface StateSchema {
  [UTApi.reducerPath]: ReturnType<typeof UTApi.reducer>;
  Trainer?: TrainerPageSliceSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type StateSchemas = TrainerPageSliceSchema;
