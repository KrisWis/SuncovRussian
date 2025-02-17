import type { Meta, StoryObj } from '@storybook/react';
import { DictantsPage } from './DictantsPage';

const meta = {
  title: 'Pages/Dictants',
  component: DictantsPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DictantsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    dictant: {
      subtheme: 'гар – гор',
      text: 'Изг*а*рь, разг*а*р лета, заг*а*р, г*а*рь, г*о*рючее, уг*а*рный газ, г*о*ревать, ог*а*рок, приг*а*рь, выг*а*рки, пог*о*релец, приг*о*рел, заг*о*релый, г*о*релка, несг*о*раемый, разг*о*релся, г*о*рняцкий',
    },
  },
};
