import Input from './Input';
import {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'components/Input',
  component: Input,
  tags: ['autodocs']
};

export default meta;

export const Basic: StoryObj<typeof Input> = {
  args: {
    label: 'Create a Todo',
  }
}
