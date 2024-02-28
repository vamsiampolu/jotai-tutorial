import { Meta, StoryObj } from '@storybook/react';
import RadioGroup from './RadioGroup';
import RadioButton from './RadioButton';
import { HStack, VStack } from '../../styled-system/jsx';
import { within, expect, fn, userEvent } from '@storybook/test';

const meta: Meta<typeof RadioGroup> = {
  title: 'components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['children', 'onValueChange'],
    },
  },
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'Initially selected value',
    },
  },
  args: {
    onValueChange: fn(),
  },
};

export default meta;

export const Soft: StoryObj<typeof RadioGroup> = {
  args: {
    name: 'fruit',
    variant: 'soft',
    legend: 'Which fruit do you want?',
    defaultValue: 'apple',
    children: (
      <VStack gap='4' alignItems='start'>
        <RadioButton label='Apple' value='apple' />
        <RadioButton label='Mango' value='mango' />
        <RadioButton label='Banana' value='banana' />
      </VStack>
    ),
  },
};

Soft.storyName = 'Soft/Base';

export const SoftSmall: StoryObj<typeof RadioGroup> = {
  args: {
    name: 'fruit',
    variant: 'soft',
    size: 'sm',
    legend: 'Which fruit do you want?',
    defaultValue: 'apple',
    children: (
      <VStack gap='4' alignItems='start'>
        <RadioButton label='Apple' value='apple' />
        <RadioButton label='Mango' value='mango' />
        <RadioButton label='Banana' value='banana' />
      </VStack>
    ),
  },
};

SoftSmall.storyName = 'Soft/Small';

export const SoftLarge: StoryObj<typeof RadioGroup> = {
  args: {
    name: 'fruit',
    variant: 'soft',
    size: 'lg',
    legend: 'Which fruit do you want?',
    defaultValue: 'apple',
    children: (
      <VStack gap='4' alignItems='start'>
        <RadioButton label='Apple' value='apple' />
        <RadioButton label='Mango' value='mango' />
        <RadioButton label='Banana' value='banana' />
      </VStack>
    ),
  },
};

SoftLarge.storyName = 'Soft/Large';

export const PrimarySoft: StoryObj<typeof RadioGroup> = {
  args: {
    name: 'fruit',
    variant: 'soft',
    color: 'primary',
    legend: 'Which fruit do you want?',
    defaultValue: 'apple',
    children: (
      <VStack gap='4' alignItems='start'>
        <RadioButton label='Apple' value='apple' />
        <RadioButton label='Mango' value='mango' />
        <RadioButton label='Banana' value='banana' />
      </VStack>
    ),
  },
};

PrimarySoft.storyName = 'Soft/Primary';

export const InfoSoft: StoryObj<typeof RadioGroup> = {
  args: {
    name: 'fruit',
    legend: 'Which fruit do you want?',
    defaultValue: 'apple',
    variant: 'soft',
    color: 'info',
    children: (
      <VStack gap='4' alignItems='start'>
        <RadioButton label='Apple' value='apple' />
        <RadioButton label='Mango' value='mango' />
        <RadioButton label='Banana' value='banana' />
      </VStack>
    ),
  },
};

InfoSoft.storyName = 'Soft/Info';

export const WarningSoft: StoryObj<typeof RadioGroup> = {
  args: {
    name: 'fruit',
    legend: 'Which fruit do you want?',
    defaultValue: 'apple',
    variant: 'soft',
    color: 'warning',
    children: (
      <VStack gap='4' alignItems='start'>
        <RadioButton label='Apple' value='apple' />
        <RadioButton label='Mango' value='mango' />
        <RadioButton label='Banana' value='banana' />
      </VStack>
    ),
  },
};

WarningSoft.storyName = 'Soft/Warning';

export const DangerSoft: StoryObj<typeof RadioGroup> = {
  args: {
    name: 'fruit',
    legend: 'Which fruit do you want?',
    defaultValue: 'apple',
    variant: 'soft',
    color: 'danger',
    children: (
      <VStack gap='4' alignItems='start'>
        <RadioButton label='Apple' value='apple' />
        <RadioButton label='Mango' value='mango' />
        <RadioButton label='Banana' value='banana' />
      </VStack>
    ),
  },
};

DangerSoft.storyName = 'Soft/Danger';

export const Base: StoryObj<typeof RadioGroup> = {
  args: {
    name: 'fruit',
    legend: 'Which fruit do you want?',
    defaultValue: 'apple',
    children: (
      <VStack gap='4' alignItems='start'>
        <RadioButton label='Apple' value='apple' />
        <RadioButton label='Mango' value='mango' />
        <RadioButton label='Banana' value='banana' />
      </VStack>
    ),
  },
};

Base.storyName = 'Surface/Base';

export const Small: StoryObj<typeof RadioGroup> = {
  args: {
    name: 'fruit',
    legend: 'Which fruit do you want?',
    defaultValue: 'apple',
    size: 'sm',
    children: (
      <VStack gap='4' alignItems='start'>
        <RadioButton label='Apple' value='apple' />
        <RadioButton label='Mango' value='mango' />
        <RadioButton label='Banana' value='banana' />
      </VStack>
    ),
  },
};

Small.storyName = 'Surface/Small';

export const Large: StoryObj<typeof RadioGroup> = {
  args: {
    name: 'fruit',
    legend: 'Which fruit do you want?',
    defaultValue: 'apple',
    size: 'lg',
    children: (
      <VStack gap='4' alignItems='start'>
        <RadioButton label='Apple' value='apple' />
        <RadioButton label='Mango' value='mango' />
        <RadioButton label='Banana' value='banana' />
      </VStack>
    ),
  },
};

Large.storyName = 'Surface/Large';

export const Primary: StoryObj<typeof RadioGroup> = {
  args: {
    name: 'fruit',
    variant: 'surface',
    color: 'primary',
    legend: 'Which fruit do you want?',
    defaultValue: 'apple',
    children: (
      <VStack gap='4' alignItems='start'>
        <RadioButton label='Apple' value='apple' />
        <RadioButton label='Mango' value='mango' />
        <RadioButton label='Banana' value='banana' />
      </VStack>
    ),
  },
};

Primary.storyName = 'Surface/Primary';

export const Info: StoryObj<typeof RadioGroup> = {
  args: {
    name: 'fruit',
    variant: 'surface',
    color: 'info',
    legend: 'Which fruit do you want?',
    defaultValue: 'apple',
    children: (
      <VStack gap='4' alignItems='start'>
        <RadioButton label='Apple' value='apple' />
        <RadioButton label='Mango' value='mango' />
        <RadioButton label='Banana' value='banana' />
      </VStack>
    ),
  },
};

Info.storyName = 'Surface/Info';

export const Warning: StoryObj<typeof RadioGroup> = {
  args: {
    name: 'fruit',
    variant: 'surface',
    color: 'warning',
    legend: 'Which fruit do you want?',
    defaultValue: 'apple',
    children: (
      <VStack gap='4' alignItems='start'>
        <RadioButton label='Apple' value='apple' />
        <RadioButton label='Mango' value='mango' />
        <RadioButton label='Banana' value='banana' />
      </VStack>
    ),
  },
};

Warning.storyName = 'Surface/Warning';

export const Danger: StoryObj<typeof RadioGroup> = {
  args: {
    name: 'fruit',
    variant: 'surface',
    color: 'danger',
    legend: 'Which fruit do you want?',
    defaultValue: 'apple',
    children: (
      <VStack gap='4' alignItems='start'>
        <RadioButton label='Apple' value='apple' />
        <RadioButton label='Mango' value='mango' />
        <RadioButton label='Banana' value='banana' />
      </VStack>
    ),
  },
};

Danger.storyName = 'Surface/Danger';

export const VerticalLayout: StoryObj<typeof RadioGroup> = {
  args: {
    name: 'fruit',
    legend: 'Which fruit do you want?',
    defaultValue: 'apple',
    children: (
      <VStack gap='4' alignItems='start'>
        <RadioButton label='Apple' value='apple' />
        <RadioButton label='Mango' value='mango' />
        <RadioButton label='Banana' value='banana' />
      </VStack>
    ),
  },
};

export const VerticalLayoutSoft: StoryObj<typeof RadioGroup> = {
  args: {
    name: 'fruit',
    legend: 'Which fruit do you want?',
    defaultValue: 'apple',
    variant: 'soft',
    color: 'primary',
    children: (
      <VStack gap='4' alignItems='start'>
        <RadioButton label='Apple' value='apple' />
        <RadioButton label='Mango' value='mango' />
        <RadioButton label='Banana' value='banana' />
      </VStack>
    ),
  },
};

export const Horizontal: StoryObj<typeof RadioGroup> = {
  args: {
    name: 'fruit',
    legend: 'Which fruit do you want?',
    defaultValue: 'apple',
    variant: 'soft',
    size: 'sm',
    color: 'primary',
    children: (
      <HStack gap='4'>
        <RadioButton label='Apple' value='apple' />
        <RadioButton label='Mango' value='mango' />
        <RadioButton label='Banana' value='banana' />
      </HStack>
    ),
  },
};

export const UpdateSelectedValue: StoryObj<typeof RadioGroup> = {
  args: {
    name: 'fruit',
    legend: 'Which fruit do you want?',
    defaultValue: 'apple',
    variant: 'soft',
    color: 'primary',
    children: (
      <VStack gap='4' alignItems='start'>
        <RadioButton label='Apple' value='apple' />
        <RadioButton label='Mango' value='mango' />
        <RadioButton label='Banana' value='banana' />
      </VStack>
    ),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const radioList = await canvas.findAllByTestId('radio-button');
    const radio = radioList[1];

    await userEvent.click(radio);
    await expect(args.onValueChange).toHaveBeenCalledWith('mango');
  },
};
