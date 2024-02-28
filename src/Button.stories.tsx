import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { within, expect, userEvent, fn } from '@storybook/test';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  tags: ['autodocs'],
  component: Button,
  parameters: {
    controls: {
      exclude: ['onClick'],
    },
  },

  argTypes: {
    onClick: {
      action: 'onClick',
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    color: 'primary',
    children: 'Click Me',
  },
};

export const ClickButton: StoryObj<typeof Button> = {
  args: {
    children: 'Click Me',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByTestId('button');
    await userEvent.click(btn);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const Info: StoryObj<typeof Button> = {
  args: {
    color: 'info',
    children: 'Click Me',
  },
};

export const Warning: StoryObj<typeof Button> = {
  args: {
    color: 'warning',
    children: 'Click Me',
  },
};

export const Danger: StoryObj<typeof Button> = {
  args: {
    color: 'danger',
    children: 'Click Me',
  },
};

export const Small: StoryObj<typeof Button> = {
  args: {
    size: 'sm',
    children: 'Click Me',
  },
};

export const Medium: StoryObj<typeof Button> = {
  args: {
    size: 'md',
    children: 'Click Me',
  },
};

export const Large: StoryObj<typeof Button> = {
  args: {
    size: 'lg',
    children: 'Click Me',
  },
};

export const Solid: StoryObj<typeof Button> = {
  args: {
    variant: 'solid',
    children: 'Click Me',
  },
};

export const Soft: StoryObj<typeof Button> = {
  args: {
    variant: 'soft',
    children: 'Click Me',
  },
};

export const Surface: StoryObj<typeof Button> = {
  args: {
    variant: 'surface',
    children: 'Click Me',
  },
};
