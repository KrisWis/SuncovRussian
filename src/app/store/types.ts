import { TestWordsSliceSchema } from '@/widgets/TestsWords';

export interface StateSchema {
  TestsWordsReducer?: TestWordsSliceSchema;
}

export type StateSchemaKey = keyof StateSchema;
