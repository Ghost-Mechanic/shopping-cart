import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CartItem from '../components/CartItem';

let mockUseOutletContext = [];
const mockSetCart = vi.fn();

vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom'),
    useOutletContext: () => [mockUseOutletContext, mockSetCart],
}));

describe('CartItem Component', () => {
  const testItem = {
        0: { id: 1, title: 'Test Item 1', price: 10.00, image: 'test1.jpg' },
        quantity: 2,
  };

  it('renders the item details correctly', () => {
    render(<CartItem item={testItem} />)

    expect(screen.getByText('Test Item 1')).toBeInTheDocument();
    expect(screen.getByText('$10.00')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Remove from cart' })).toBeInTheDocument();
  });

  it('calls setCart when item quantity is increased or decreased', () => {
    render(<CartItem item={testItem} />)

    const decreaseButton = screen.getByRole('button', { name: '-' });
    const increaseButton = screen.getByRole('button', { name: '+' });

    fireEvent.click(decreaseButton);
    expect(mockSetCart).toHaveBeenCalledTimes(1);

    fireEvent.click(increaseButton);
    expect(mockSetCart).toHaveBeenCalledTimes(2);
  });

  it('removes item from cart when quantity is set to 0', () => {
    render(<CartItem item={testItem} />)

    const removeButton = screen.getByRole('button', { name: 'Remove from cart' });

    fireEvent.click(removeButton);
    expect(mockSetCart).toHaveBeenCalledWith([]);
  });
});