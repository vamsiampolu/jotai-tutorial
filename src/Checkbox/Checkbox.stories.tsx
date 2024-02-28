import { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';
import { fn } from '@storybook/test';

const meta: Meta<typeof Checkbox> = {
  title: 'components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    controls: {
      exclude: ['onChange'],
    },
  },
  args: {
    onChange: fn(),
  },
};

export default meta;

export const Surface: StoryObj<typeof Checkbox> = {
  args: {
    label: 'I agree',
  },
};

export const Soft: StoryObj<typeof Checkbox> = {
  args: {
    variant: 'soft',
    label: 'I agree',
  },
};
