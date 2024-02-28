import Checkbox from './Checkbox';
import {describe, expect, it, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import {userEvent} from '@storybook/test';

describe('components/Checkbox', () => {
  it('displays a label for the checkbox', () => {
    render(<Checkbox label='Label' />);

    expect(screen.getByTestId('checkbox-label')).toBeInTheDocument();
    expect(screen.getByTestId('checkbox-label')).toHaveTextContent('Label');
    expect(screen.getByTestId('checkbox-label').tagName).toEqual('LABEL');
  });

  it('displays a checkbox input', () => {
    render(<Checkbox label='Label' />);

    expect(screen.getByTestId('checkbox-input')).toBeInTheDocument();
    expect(screen.getByTestId('checkbox-input')).not.toBeChecked();
    expect(screen.getByTestId('checkbox-input')).toHaveClass('sr_true');
  });

  it('displays a checkbox indicator when unchecked', () => {
    render(<Checkbox label='Label' />)
    expect(screen.getByTestId('checkbox-indicator')).toBeInTheDocument();
  });

  it('displays an indicator with an icon when checked', () => {
    render(<Checkbox label='Label' defaultChecked />)

    expect(screen.getByTestId('checkbox-indicator')).toBeInTheDocument();
    expect(screen.getByTestId('checkbox-icon')).toBeInTheDocument();
  });

  it('invokes an onChange handler with the updated state of the checkbox', async () => {
    const onChange = vi.fn();
    render(<Checkbox label='Label' onChange={onChange} />)

    const user = userEvent.setup();
    expect(screen.getByTestId('checkbox-input')).toBeInTheDocument();

    await user.click(screen.getByTestId('checkbox-input'));
    expect(onChange).toHaveBeenCalledWith(true);
  });
})
