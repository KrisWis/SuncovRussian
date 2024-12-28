import { AccentsWordsSliceSchema } from '@/widgets/AccentsWords';

export interface StateSchema {
  AccentsWordsReducer?: AccentsWordsSliceSchema;
}

export type StateSchemaKey = keyof StateSchema;
