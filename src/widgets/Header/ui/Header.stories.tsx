import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { HeaderCategories, HeaderContext } from '..';
import { useState } from 'react';

const HeaderWrapper: React.FC = (): React.JSX.Element => {
  // Настройка контекста
  const [headerCategory, setHeaderCategory] = useState<HeaderCategories | null>(
    null,
  );

  return (
    <HeaderContext.Provider value={{ headerCategory, setHeaderCategory }}>
      <Header />
    </HeaderContext.Provider>
  );
};

const meta = {
  title: 'Widgets/Header',
  component: HeaderWrapper,
} satisfies Meta<typeof HeaderWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
