import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, expect, it } from 'vitest';
import ItemCard from '../components/ItemCard';
import '@testing-library/jest-dom';

describe('ItemCard', () => {
    const mockItem = {
        id: 1,
        title: 'Test Product',
        image: 'https://via.placeholder.com/150',
        price: 19.99,
    };

    const mockHandleAdd = vi.fn();

    it('renders the item details', () => {
        render(<ItemCard item={mockItem} handleAdd={mockHandleAdd} />);

        expect(screen.getByText('Test Product')).toBeInTheDocument();
        expect(screen.getByText('$19.99')).toBeInTheDocument();
        expect(screen.getByAltText('')).toBeInTheDocument();
    });

    it('updates the quantity input correctly', () => {
        render(<ItemCard item={mockItem} handleAdd={mockHandleAdd} />);
        const input = screen.getByRole('spinbutton');

        fireEvent.change(input, { target: { value: '5' } });
        expect(input.value).toBe('5');
    });

    it('calls handleAdd correctly', () => {
        render(<ItemCard item={mockItem} handleAdd={mockHandleAdd} />);
        const button = screen.getByText('Add to cart');
        const input = screen.getByRole('spinbutton');

        fireEvent.change(input, { target: { value: '3' } });
        fireEvent.click(button);

        expect(mockHandleAdd).toHaveBeenCalled();
    });
});