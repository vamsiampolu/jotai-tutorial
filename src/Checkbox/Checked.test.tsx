import Checked from './Checked';
import {describe, it, expect} from 'vitest';
import { render, screen } from '@testing-library/react';

describe('components/Checkbox/Checked', () => {
  it('creates a Checked icon with appropriate styles', () => {
    render(<Checked />)
    expect(screen.getByTestId('checkbox-icon-wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('checkbox-icon')).toBeInTheDocument();
  });

  it('creates a soft Checked icon', () => {
    render(<Checked soft />);
    
    expect(screen.getByTestId('checkbox-icon-wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('checkbox-icon')).toBeInTheDocument();

    expect(screen.getByTestId('checkbox-icon')).toHaveAttribute('stroke', 'indigo.800');
    expect(screen.getByTestId('checkbox-icon')).toHaveAttribute('fill', 'indigo.800');
  });

  it('shows a soft Checked icon of color info', () => {
    render(<Checked soft color='info' />);
    
    expect(screen.getByTestId('checkbox-icon-wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('checkbox-icon')).toBeInTheDocument();

    expect(screen.getByTestId('checkbox-icon')).toHaveAttribute('stroke', 'cyan.800');
    expect(screen.getByTestId('checkbox-icon')).toHaveAttribute('fill', 'cyan.800');
  });
});
