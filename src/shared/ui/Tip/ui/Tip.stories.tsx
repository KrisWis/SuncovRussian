import type { Meta, StoryObj } from '@storybook/react';
import { Tip } from './Tip';
import { Flex } from '@/shared/lib/Stack';

const TipWrapper: React.FC = (): React.JSX.Element => {
  return (
    <Flex relative style={{ width: '100vw', height: '100vh' }} justify="center">
      <Tip id={0} text="Не ставь запятую между подлежащим и сказуемым." />
    </Flex>
  );
};

const meta = {
  title: 'Shared/UI/Tip',
  component: TipWrapper,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TipWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
