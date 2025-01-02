import { TrainerSliceSchema } from '@/widgets/Trainer';

export interface StateSchema {
  TrainerReducer?: TrainerSliceSchema;
}

export type StateSchemaKey = keyof StateSchema;
