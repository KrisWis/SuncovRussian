import type { Meta, StoryObj } from '@storybook/react';
import { TemplateForTests } from './TemplateForTests';

const meta = {
  title: 'Shared/UI/TemplateForTests',
  component: TemplateForTests,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TemplateForTests>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    testElement: <>Компонент теста</>,
    checkButtonOnClick: () => ({
      testIsFailed: false,
      testHasMissedAnswers: false,
    }),
    correctAnswersCount: 0,
    maxCorrectAnswersCount: 0,
    testIsFailed: false,
    testHasMissedAnswers: false,
    theme: 'Тема',
  },
};
