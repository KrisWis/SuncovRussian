import type { Meta, StoryObj } from '@storybook/react';
import { Hint } from './Hint';

const meta = {
  title: 'Shared/UI/Hint',
  component: Hint,
} satisfies Meta<typeof Hint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {
  args: {
    text: `
        Выбирайте ответ, а система будет предлагать новые слова или те, в
        которых были допущены ошибки. Когда вы перестанете их допускать, шкала
        полностью заполнится. Заполните шкалу несколько раз, сделайте работу над
        ошибками - и вы готовы.
      `,
    textDirection: 'right',
  },
};

export const Top: React.FC = (): React.JSX.Element => {
  return (
    <div style={{ marginTop: 100, width: 250, position: 'relative' }}>
      <Hint
        textDirection="top"
        text="Не ставь запятую между подлежащим и сказуемым."
      />
    </div>
  );
};
