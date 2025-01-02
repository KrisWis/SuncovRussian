import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { HeaderContext } from '..';
import { useState } from 'react';

const HeaderWrapper: React.FC = (): React.JSX.Element => {
  // Настройка контекста
  const [headerCategory, setHeaderCategory] = useState<string | null>(null);

  return (
    <HeaderContext.Provider value={{ headerCategory, setHeaderCategory }}>
      <Header />
    </HeaderContext.Provider>
  );
};

const meta = {
  title: 'Widgets/Header',
  component: HeaderWrapper,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HeaderWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
