import { atomsForStorybook } from '@alexgorbatchev/storybook-addon-jotai';
import { Meta, StoryObj } from '@storybook/react';
import Counter from './Counter';
import { counter } from './atoms/counter';
import { within, expect, userEvent } from '@storybook/test';

const meta: Meta<typeof Counter> = {
  title: 'components/Counter',
  component: Counter,
};

export default meta;

export const Increment: StoryObj<typeof Counter> = {
  args: {},
  parameters: {
    jotai: atomsForStorybook({
      atoms: () => ({
        counter,
      }),
      values: () => ({
        counter: 1,
      }),
    }),
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const el = await canvas.findByTestId('count');
    await expect(el).toHaveTextContent('1');

    await step('Click Button to Increment Count', async () => {
      const btn = await canvas.findByTestId('button');
      await userEvent.click(btn);
    });

    await expect(el).toHaveTextContent('2');
  },
};
