import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductContext } from '../context/ProductContext';
import SearchBar from '../components/SearchBar';
import { vi } from 'vitest';

const mockSetSearchTerm = vi.fn();

const mockContextValue = {
  searchTerm: '',
  setSearchTerm: mockSetSearchTerm,
};

describe('SearchBar Component', () => {
  test('calls setSearchTerm on input change', () => {
    render(
      <ProductContext.Provider value={mockContextValue}>
        <SearchBar />
      </ProductContext.Provider>
    );

    const input = screen.getByPlaceholderText('Search products...');
    fireEvent.change(input, { target: { value: 'New search term' } });

    expect(mockSetSearchTerm).toHaveBeenCalledWith('New search term');
  });
});
