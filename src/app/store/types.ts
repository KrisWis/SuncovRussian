import { TrainerSliceSchema } from '@/widgets/Trainer';

export interface StateSchema {
  Global: object;
  Trainer?: TrainerSliceSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type StateSchemas = TrainerSliceSchema;
