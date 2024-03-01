import {composeStories} from '@storybook/react'
import * as stories from './Input.stories';
import {describe, expect, it, vi} from 'vitest';
import { userEvent } from '@storybook/test';
import {render, screen} from '@testing-library/react';

const {Basic: Input} = composeStories(stories);

describe('components/Input', () => {
  it('creates a form with a label and input', () => {
     render(<Input id="form-input" />)
    expect(screen.getByTestId('input-form')).toBeInTheDocument();
    expect(screen.getByTestId('form-input-label')).toBeInTheDocument();
    expect(screen.getByTestId('form-input')).toBeInTheDocument();
    expect(screen.getByTestId('form-input')).toHaveAttribute('id', 'form-input');
  });

  it('allows the input to be initalized with a value', () => {
     render(<Input id="form-input" value="Foobar" />)
     expect(screen.getByTestId('form-input')).toHaveAttribute('id', 'form-input');
     expect(screen.getByTestId('form-input')).toHaveValue('Foobar');
  });

  it('receives the input value on form submit', async () => {
    const onCreate = vi.fn();
    const user = userEvent.setup();

    render(<Input id="form-input" onCreate={onCreate} />);

    const input = screen.getByTestId('form-input');
    const form = screen.getByTestId('input-form');
    expect(form).toBeInTheDocument();

    await user.type(input, 'Do the thing{enter}');
    expect(onCreate).toHaveBeenCalled();
  });
});
