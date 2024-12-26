import type { Meta, StoryObj } from '@storybook/react';
import { TestsWords } from './TestsWords';
import { accentsTestsWords } from '@/shared/static/tests_words/accents';

const meta = {
  title: 'Widgets/TestsWords',
  component: TestsWords,
} satisfies Meta<typeof TestsWords>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    words: accentsTestsWords,
  },
};
