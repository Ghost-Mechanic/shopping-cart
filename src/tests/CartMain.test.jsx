import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import CartMain from '../components/CartMain';

let mockUseOutletContext = [];
const mockSetCart = vi.fn();

vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom'),
    useOutletContext: () => [mockUseOutletContext, mockSetCart],
}));

describe('CartMain Component', () => {
    it('renders empty cart message when cart is empty', () => {
  
      render(<CartMain />);

      // Check if the empty cart message is displayed
      expect(screen.getByText(/Looks like your cart is empty!/i)).toBeInTheDocument();
    });

    it('renders cart items and pricing when cart is populated', () => {
        // Populated cart scenario
        mockUseOutletContext = [
            {
              0: { id: 1, title: 'Test Item 1', price: 10.00, image: 'test1.jpg' },
              quantity: 2
            },
            {
              0: { id: 2, title: 'Test Item 2', price: 15.00, image: 'test2.jpg' },
              quantity: 1
            }
          ];

        render(<CartMain />);

        // Check if the items are displayed
        expect(screen.getByText('Test Item 1')).toBeInTheDocument();
        expect(screen.getByText('Test Item 2')).toBeInTheDocument();

        // Check if the pricing details are displayed
        expect(screen.getByText(/Subtotal: \$35.00/i)).toBeInTheDocument();
        expect(screen.getByText(/Tax: \$3.50/i)).toBeInTheDocument();
        expect(screen.getByText(/Total: \$38.50/i)).toBeInTheDocument();
    });
});