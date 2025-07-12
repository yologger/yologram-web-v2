import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Counter } from './Counter';

describe('Counter', () => {
  it('renders counter with initial value of 0', () => {
    render(<Counter />);

    expect(screen.getByText('Counter')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('increments counter when + button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const incrementButton = screen.getByText('+');
    await user.click(incrementButton);

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('decrements counter when - button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const decrementButton = screen.getByText('-');
    await user.click(decrementButton);

    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  it('can increment and decrement multiple times', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const incrementButton = screen.getByText('+');
    const decrementButton = screen.getByText('-');

    // Increment 3 times
    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(incrementButton);
    expect(screen.getByText('3')).toBeInTheDocument();

    // Decrement 2 times
    await user.click(decrementButton);
    await user.click(decrementButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
