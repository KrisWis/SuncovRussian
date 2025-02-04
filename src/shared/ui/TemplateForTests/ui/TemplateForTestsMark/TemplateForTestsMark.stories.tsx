import type { Meta, StoryObj } from '@storybook/react';
import { TemplateForTestsMark } from './TemplateForTestsMark';
import LikeSVG from '@/shared/assets/icons/DictantsPage/LikeSVG.svg';
import DislikeSVG from '@/shared/assets/icons/DictantsPage/DislikeSVG.svg';

const meta = {
  title: 'Shared/UI/TemplateForTests/Mark',
  component: TemplateForTestsMark,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TemplateForTestsMark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Like: Story = {
  args: {
    markElement: <LikeSVG />,
  },
};

export const Dislike: Story = {
  args: {
    markElement: <DislikeSVG />,
  },
};
