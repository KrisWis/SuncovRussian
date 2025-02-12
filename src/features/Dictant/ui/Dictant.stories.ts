import type { Meta, StoryObj } from '@storybook/react';
import { Dictant } from './Dictant';

const meta = {
  title: 'Features/Dictant',
  component: Dictant,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Dictant>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'певц*ы*, ц*и*рк, ц*ы*ган, творц*е*, писать ц*и*фры, мудрец* *, ходить на ц*ы*почках, душистый нарц*и*сс, любимец* * публики, ц*ы*плёнок, мелкие частиц*ы*, нарисовать ц*и*ркулем, ц*и*рковое представление, красавиц*а*, ц*о*п-ц*о*п, мотоц*и*кл, ц*и*линдр, синиц*а*, умельц*а*, огурец* *, ц*и*ркач, длинные пальц*ы*‚ зимние месяц*а*‚ панц*и*рь черепахи.',
    isMissed: false,
    maxCorrectLetters: 0,
  },
};
