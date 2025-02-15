import { ThunkConfig } from '@/shared/store';
import { TestInterface } from '@/features/Test';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllTests } from '../../api/testsPageApi';

export const getTests = createAsyncThunk<
  TestInterface[],
  void,
  ThunkConfig<string>
>('tests/getAllTests', async (_, thunkApi) => {
  const { rejectWithValue, dispatch } = thunkApi;

  try {
    const response = await dispatch(
      getAllTests(), // Возвращаем тесты
    ).unwrap();

    return response;
  } catch (e) {
    console.log(e);
    return rejectWithValue('');
  }
});
