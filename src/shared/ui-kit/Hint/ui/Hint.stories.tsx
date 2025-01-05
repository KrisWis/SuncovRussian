import type { Meta, StoryObj } from '@storybook/react';
import { Hint } from './Hint';

const meta = {
  title: 'Shared/UI-Kit/Hint',
  component: Hint,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Hint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {
  args: {
    children: (
      <span>
        Выбирайте ответ, а система будет предлагать новые слова или те, в
        которых были допущены ошибки. Когда вы перестанете их допускать, шкала
        полностью заполнится. Заполните шкалу несколько раз, сделайте работу над
        ошибками - и вы готовы.
      </span>
    ),
    textDirection: 'right',
  },
};

export const Top: Story = {
  args: {
    children: (
      <span>
        Выбирайте ответ, а система будет предлагать новые слова или те, в
        которых были допущены ошибки. Когда вы перестанете их допускать, шкала
        полностью заполнится. Заполните шкалу несколько раз, сделайте работу над
        ошибками - и вы готовы.
      </span>
    ),
    textDirection: 'top',
  },
};
