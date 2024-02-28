import TodoFilter from './TodoFilter';
import { atomsForStorybook } from '@alexgorbatchev/storybook-addon-jotai';
import { filterAtom } from './atoms/todos';
import { within, expect, userEvent } from '@storybook/test';

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TodoFilter> = {
  title: 'components/TodoList/TodoFilter',
  component: TodoFilter,
};

export default meta;

export const Filter: StoryObj<typeof TodoFilter> = {
  args: {},
  parameters: {
    jotai: atomsForStorybook({
      atoms: () => ({
        filterAtom,
      }),
      values: () => ({
        filterAtom: 'all',
      }),
    }),
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const radioButtons = await canvas.findAllByTestId('radio-button');
    await expect(radioButtons[0]).toBeChecked();

    await step('Updae the filter from all to completed', async () => {
      await userEvent.click(radioButtons[1]);
    });

    expect(radioButtons[1]).toBeChecked();
  },
};
