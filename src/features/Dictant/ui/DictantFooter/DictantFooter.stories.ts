import type { Meta, StoryObj } from '@storybook/react';
import { DictantFooter } from './DictantFooter';

const meta = {
  title: 'Widgets/DictantFooter',
  component: DictantFooter,
  parameters: {
    layout: 'centered',
  },

} satisfies Meta<typeof DictantFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};