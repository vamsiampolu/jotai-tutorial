import { Meta, StoryObj } from '@storybook/react';
import TodoList from './TodoList';
import { atomsForStorybook } from '@alexgorbatchev/storybook-addon-jotai';
import { todosAtom, filterAtom } from './atoms/todos';

const meta: Meta<typeof TodoList> = {
  title: 'components/TodoList',
  component: TodoList,
  tags: ['autodocs'],
};

export default meta;

export const Basic: StoryObj<typeof TodoList> = {
  parameters: {
    jotai: atomsForStorybook({
      atoms: {
        todos: todosAtom,
        filterAtom,
      },
      values: {
        todos: [],
        filterAtom: 'all',
      },
    }),
  },
};
