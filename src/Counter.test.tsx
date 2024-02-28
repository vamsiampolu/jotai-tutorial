import { describe, it, expect } from 'vitest';

import Counter from './Counter';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { AtomTuples, TestProvider } from './test-helpers';
import { counter } from './atoms/counter';

describe('components/Counter', () => {
  it('initializes the count at 1', () => {
    const initialValues = [[counter, 1]] as unknown as AtomTuples;
    render(
      <TestProvider initialValues={initialValues}>
        <Counter />
      </TestProvider>,
    );
    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });

  it('increments the count by 1 when button is clicked', async () => {
    const initialValues = [[counter, 1]] as unknown as AtomTuples;
    render(
      <TestProvider initialValues={initialValues}>
        <Counter />
      </TestProvider>,
    );
    await userEvent.click(screen.getByTestId('button'));
    expect(screen.getByTestId('count')).toHaveTextContent('2');
  });
});
