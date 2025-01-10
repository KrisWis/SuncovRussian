import { UTApi } from '@/shared/api/UTApi/api';
import { TrainerSliceSchema } from '@/widgets/Trainer';

export interface StateSchema {
  [UTApi.reducerPath]: ReturnType<typeof UTApi.reducer>;
  Trainer?: TrainerSliceSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type StateSchemas = TrainerSliceSchema;
