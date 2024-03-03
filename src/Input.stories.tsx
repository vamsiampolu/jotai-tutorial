import Input from './Input';
import { Meta, StoryObj } from '@storybook/react';
import { fn, within, userEvent, expect } from '@storybook/test';

const meta: Meta<typeof Input> = {
  title: 'components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    args: {
      exclude: ['onCreate'],
    },
  },
  args: {
    onCreate: fn(),
  },
};

export default meta;

export const Basic: StoryObj<typeof Input> = {
  args: {
    label: 'Create a Todo',
  },
};

export const CreateTodo: StoryObj<typeof Input> = {
  args: {
    label: 'Create a Todo',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByTestId('form-input');
    await userEvent.type(input, 'Fly a kite{enter}');
    expect(args.onCreate).toHaveBeenCalled();
  },
};
