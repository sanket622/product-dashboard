import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductContext } from '../context/ProductContext';
import ProductList from '../components/ProductList';
import { vi } from 'vitest';

const mockSetSort = vi.fn();

const mockContextValue = {
  filteredProducts: [
    { title: 'Product 1', price: 100, popularity: 5000 },
    { title: 'Product 2', price: 200, popularity: 10000 },
  ],
  loading: false,
  error: '',
  setSort: mockSetSort,
  currentPage: 1,
  itemsPerPage: 2,
};

describe('ProductList Component', () => {
  beforeEach(() => {
    mockSetSort.mockClear(); 
  });

  test('calls setSort on column header click', () => {
    render(
      <ProductContext.Provider value={mockContextValue}>
        <ProductList />
      </ProductContext.Provider>
    );

    const titleHeader = screen.getByText('Title');
    fireEvent.click(titleHeader);

    
    expect(mockSetSort).toHaveBeenCalled();
    expect(typeof mockSetSort.mock.calls[0][0]).toBe('function');

  
    const setSortCallArgument = mockSetSort.mock.calls[0][0];
    const result = setSortCallArgument({ by: 'title', order: 'asc' });

    expect(result).toEqual({
      by: 'title',
      order: 'desc',
    });
  });

  test('renders product list correctly', () => {
    render(
      <ProductContext.Provider value={mockContextValue}>
        <ProductList />
      </ProductContext.Provider>
    );

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });
});
