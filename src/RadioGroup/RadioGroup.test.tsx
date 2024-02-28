import RadioGroup from './RadioGroup';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { composeStories } from '@storybook/react';
import * as stories from './RadioGroup.stories';

const { Base: Surface } = composeStories(stories);

describe('components/RadioGroup/RadioGroup', () => {
  it('renders a fieldset and a legend', () => {
    const component = (
      <RadioGroup legend='Wardrobe Size' name='size' defaultValue='small'>
        Text
      </RadioGroup>
    );
    render(component);

    expect(screen.getByTestId('fieldset')).toBeInTheDocument();
    expect(screen.getByTestId('fieldset')).toHaveClass('radio-group');

    expect(screen.getByTestId('legend')).toBeInTheDocument();
    expect(screen.getByTestId('legend')).toHaveClass('legend');

    expect(screen.getByTestId('legend')).toHaveTextContent('Wardrobe Size');
  });

  it('creates three labels with className radio-button-label', async () => {
    render(<Surface />);

    const labels = await screen.findAllByTestId('radio-button-label');
    expect(labels).toHaveLength(3);

    expect(labels.map((label) => label.textContent)).toEqual([
      'Apple',
      'Mango',
      'Banana',
    ]);
    expect(labels[0]).toHaveClass('radio-button-label');
  });

  it('creates three radio inputs with the name fruit', async () => {
    render(<Surface />);

    const radios = await screen.findAllByTestId('radio-button');
    expect(radios).toHaveLength(3);

    const radioNames = new Set(
      radios.map((radio) => radio.getAttribute('name')),
    );
    expect(radioNames).toHaveLength(1);
    expect(radioNames).toEqual(new Set(['fruit']));

    expect(radios[0]).toHaveClass('radio-button');
  });

  it('creates three radio inputs with the values provided', async () => {
    render(<Surface />);

    const radios = await screen.findAllByTestId('radio-button');
    expect(radios).toHaveLength(3);

    const values = radios.map((radio) => radio.getAttribute('value'));
    expect(values).toHaveLength(3);
    expect(values).toEqual(['apple', 'mango', 'banana']);

    expect(radios[0]).toHaveClass('radio-button');
  });

  it('checks the radio button with the default value when checked', async () => {
    render(<Surface />);

    const radios = await screen.findAllByTestId('radio-button');
    expect(radios).toHaveLength(3);

    const valueCheckedList = radios.map((r) => ({
      checked: r.getAttribute('checked'),
      value: r.getAttribute('value'),
    }));
    expect(valueCheckedList).toEqual([
      {
        value: 'apple',
        checked: '',
      },
      {
        value: 'mango',
        checked: null,
      },
      {
        value: 'banana',
        checked: null,
      },
    ]);
  });

  it('creates an indicator to check and uncheck the radio button', async () => {
    render(<Surface />);

    const indicators = await screen.findAllByTestId('radio-button-indicator');
    expect(indicators).toHaveLength(3);
    expect(indicators[0]).toHaveAttribute('data-checked');

    expect(indicators[1]).not.toHaveAttribute('data-checked');
    expect(indicators[2]).not.toHaveAttribute('data-checked');
  });

  it('invokes the onValueChange handler when value is updated', async () => {
    const onValueChange = vi.fn();
    const user = userEvent.setup();
    render(<Surface onValueChange={onValueChange} />);

    const radios = await screen.findAllByTestId('radio-button');
    expect(radios[0]).toBeChecked();

    await user.click(radios[1]);
    expect(onValueChange).toHaveBeenCalledWith('mango');

    expect(radios[1]).toBeChecked();
    expect(radios[0]).not.toBeChecked();
  });
});
