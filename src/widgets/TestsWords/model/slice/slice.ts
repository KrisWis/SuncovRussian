import { buildSlice } from '@/shared/lib/store';
import { setWordsAction, TestWordsSliceSchema } from '../types/sliceTypes';

const initialState: TestWordsSliceSchema = {
  words: [],
};

export const TestsWordsSlice = buildSlice({
  name: 'TestsWordsSlice',
  initialState: initialState,
  reducers: {
    setWords: (state: TestWordsSliceSchema, action: setWordsAction) => {
      state.words = action.payload;
    },
  },
});

export const {
  actions: TestsWordsActions,
  reducer: TestsWordsReducer,
  useActions: useTestsWordsActions,
} = TestsWordsSlice;
