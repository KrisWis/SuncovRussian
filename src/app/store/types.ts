import { yandexCloudApi } from '@/shared/api/yandexCloudApi/api';
import { TrainerSliceSchema } from '@/widgets/Trainer';

export interface StateSchema {
  [yandexCloudApi.reducerPath]: ReturnType<typeof yandexCloudApi.reducer>;
  Trainer?: TrainerSliceSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type StateSchemas = TrainerSliceSchema;
