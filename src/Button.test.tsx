import { fireEvent, render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as buttonStories from './Button.stories';

import { describe, it, expect, vi } from 'vitest';

const { Primary, Info, Solid, Soft, Surface, Warning, Danger } =
  composeStories(buttonStories);
describe('components/Button', () => {
  it('accepts a className from the user', () => {
    render(<Primary className='foobar' />);
    expect(screen.getByTestId('button')).toHaveClass('foobar');
  });

  it('creates a disabled a Button', () => {
    render(<Primary className='foobar' disabled />);
    expect(screen.getByTestId('button')).toHaveAttribute('disabled');
  });

  it('allows to user to register an onClick handler', () => {
    const onClick = vi.fn();
    render(<Primary onClick={onClick} />);

    const btn = screen.getByTestId('button');
    fireEvent.click(btn);

    expect(onClick).toHaveBeenCalled();
  });

  describe('Primary', () => {
    it('creates a primary button', () => {
      render(<Primary />);

      expect(screen.getByTestId('button')).toHaveTextContent('Click Me');
      expect(screen.getByTestId('button')).toHaveClass('btn-primary-solid');
    });

    it('creates a primary solid button', () => {
      render(<Solid />);

      expect(screen.getByTestId('button')).toHaveTextContent('Click Me');
      expect(screen.getByTestId('button')).toHaveClass('btn-primary-solid');
    });

    it('creates a primary Soft button', () => {
      render(<Soft />);

      expect(screen.getByTestId('button')).toHaveTextContent('Click Me');
      expect(screen.getByTestId('button')).toHaveClass('btn-primary-soft');
    });

    it('creates a primary surface button', () => {
      render(<Surface />);

      expect(screen.getByTestId('button')).toHaveTextContent('Click Me');
      expect(screen.getByTestId('button')).toHaveClass('btn-primary-surface');
    });
  });

  describe('Info', () => {
    it('creates an Info solid button', () => {
      render(<Info />);

      expect(screen.getByTestId('button')).toHaveTextContent('Click Me');
      expect(screen.getByTestId('button')).toHaveClass('btn-info-solid');
    });

    it('creates an Info soft button', () => {
      render(<Info variant='soft' />);

      expect(screen.getByTestId('button')).toHaveTextContent('Click Me');
      expect(screen.getByTestId('button')).toHaveClass('btn-info-soft');
    });

    it('creates an Info surface button', () => {
      render(<Info variant='surface' />);

      expect(screen.getByTestId('button')).toHaveTextContent('Click Me');
      expect(screen.getByTestId('button')).toHaveClass('btn-info-surface');
    });
  });

  describe('Warning', () => {
    it('creates a Warning solid button', () => {
      render(<Warning />);

      expect(screen.getByTestId('button')).toHaveTextContent('Click Me');
      expect(screen.getByTestId('button')).toHaveClass('btn-warning-solid');
    });

    it('creates a Warning soft button', () => {
      render(<Warning variant='soft' />);

      expect(screen.getByTestId('button')).toHaveTextContent('Click Me');
      expect(screen.getByTestId('button')).toHaveClass('btn-warning-soft');
    });

    it('creates a Warning surface button', () => {
      render(<Warning variant='surface' />);

      expect(screen.getByTestId('button')).toHaveTextContent('Click Me');
      expect(screen.getByTestId('button')).toHaveClass('btn-warning-surface');
    });
  });

  describe('Danger', () => {
    it('creates a Danger solid button', () => {
      render(<Danger />);

      expect(screen.getByTestId('button')).toHaveTextContent('Click Me');
      expect(screen.getByTestId('button')).toHaveClass('btn-danger-solid');
    });

    it('creates a Danger soft button', () => {
      render(<Danger variant='soft' />);

      expect(screen.getByTestId('button')).toHaveTextContent('Click Me');
      expect(screen.getByTestId('button')).toHaveClass('btn-danger-soft');
    });

    it('creates a Danger surface button', () => {
      render(<Danger variant='surface' />);

      expect(screen.getByTestId('button')).toHaveTextContent('Click Me');
      expect(screen.getByTestId('button')).toHaveClass('btn-danger-surface');
    });
  });
});
