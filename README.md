# Сайт для изучения русского языка

# Запуск сайта

Инструкция по запуску сайта на ваш локальный компьютер:

1.  Склонируйте данный репозиторий.
2.  Напиши в терминале `npm install` для установки всех зависимостей.
3.  Напишите в терминале команду `npm run dev`.

## Или вы можете просто зайти на [сайт](https://evgeniywis.github.io/SuncovRussian/), загруженный на Github Pages.

## Скрипты

- `npm run dev` - Запуск проекта в dev режиме на Vite
- `npm run build` - Сборка проекта с помощью Vite
- `npm run deploy` - Деплой проекта на Github Pages
- `npm run stylelint:check` - Запуск проверки scss файлов проекта с помощью styleLint
- `npm run stylelint:fix` - Запуск исправления scss файлов проекта, там где это возможно, с помощью styleLint
- `npm run eslint:check` - Запуск проверки ts файлов проекта с помощью esLint
- `npm run eslint:fix` - Запуск исправления ts файлов проекта, там где это возможно, с помощью esLint
- `npm run storybook` - запуск Storybook
- `npm run storybook:build` - Сборка storybook билда
- `npm run test:unit` - Запуск unit тестов с jest/react-testing-library
- `npm run prettier` - запуск Prettier для форматирования кода
- `npm run prepare` - Загрузка husky для прекоммит-хуков
- `npm run test:e2e` - Запуск e2e тестов с Cypress

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design.

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Тесты

В проекте используются 3 вида тестов:

1. Обычные unit тесты на jest - `npm run test:unit`
2. Тесты на компоненты с React testing library - `npm run test:unit`
3. e2e тестирование с Cypress - `npm run test:e2e`

Подробнее о тестах - [документация тестирования](/docs/tests.md)

---

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями. Также используется dependency-cruiser для анализа зависимостей.

##### Запуск линтеров

- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

---

## Storybook

В проекте для каждого компонента описываются стори-кейсы.

Файл со сторикейсами создаётся рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:

- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ButtonTypes } from '../model/Button__types';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonRed: Story = {
  args: {
    to: '/',
    text: 'Красная кнопка',
    type: ButtonTypes.RED,
  },
};

export const ButtonBlue: Story = {
  args: {
    to: '/',
    text: 'Синяя кнопка',
    type: ButtonTypes.BLUE,
  },
};

export const ButtonGray: Story = {
  args: {
    to: '/',
    text: 'Серая кнопка',
    type: ButtonTypes.GRAY,
  },
};

export const ButtonBlack: Story = {
  args: {
    to: '/',
    text: 'Чёрная кнопка',
    type: ButtonTypes.BLACK,
  },
};
```

---

## Конфигурация проекта

Для разработки проект содержит декомпозированный конфиг:
Webpack - ./config/build и webpack.config.ts

Cборщик адаптирован под основные фичи приложения.

Вся конфигурация хранится в корне проекта:

- jest.config.ts - конфигурация тестовой среды Jest
- /.storybook - конфигурация Storybook

В папке `scripts` находятся различные скрипты для рефакторинга/упрощения написания кода/генерации отчетов и тд.

---

## Pre commit хуки

В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

---

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter.

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](src/shared/ui/DynamicModuleLoader/ui/DynamicModuleLoader.tsx)

---

## Прочие особенности:

TODO: расписать здесь особенности (и как в TeleWorks)
