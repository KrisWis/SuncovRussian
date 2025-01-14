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
<<<<<<< HEAD
<<<<<<< HEAD
    text: `
=======
    children: (
      <span>
>>>>>>> 3b93d38 (Fix header, add UI-Kit component -Hint, fix some other things.)
=======
    text: `
>>>>>>> fed6419 (Add PDFViewer Component, UI-kit ErrorComponent and Theory basic functional.)
        Выбирайте ответ, а система будет предлагать новые слова или те, в
        которых были допущены ошибки. Когда вы перестанете их допускать, шкала
        полностью заполнится. Заполните шкалу несколько раз, сделайте работу над
        ошибками - и вы готовы.
<<<<<<< HEAD
<<<<<<< HEAD
      `,
<<<<<<< HEAD
=======
      </span>
    ),
>>>>>>> 3b93d38 (Fix header, add UI-Kit component -Hint, fix some other things.)
=======
      `,
>>>>>>> fed6419 (Add PDFViewer Component, UI-kit ErrorComponent and Theory basic functional.)
    textDirection: 'right',
  },
};

export const Top: Story = {
  args: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fed6419 (Add PDFViewer Component, UI-kit ErrorComponent and Theory basic functional.)
    text: `
        В этом тренажере под подчинительным союзом понимается любое
        средство подчинительной связи, т.е. союз, союзное слово,
        частица
      `,
<<<<<<< HEAD
=======
    children: (
      <span>
        Выбирайте ответ, а система будет предлагать новые слова или те, в
        которых были допущены ошибки. Когда вы перестанете их допускать, шкала
        полностью заполнится. Заполните шкалу несколько раз, сделайте работу над
        ошибками - и вы готовы.
      </span>
    ),
>>>>>>> 3b93d38 (Fix header, add UI-Kit component -Hint, fix some other things.)
=======
>>>>>>> fed6419 (Add PDFViewer Component, UI-kit ErrorComponent and Theory basic functional.)
    textDirection: 'top',
  },
=======
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
>>>>>>> f1d426f (Delete dependency cruiser and replace it eslint plugin, fix circular dependencies, fix storybook and unit tests, finish theory block - fix pdf viewer, add adaptive for theory)
};
