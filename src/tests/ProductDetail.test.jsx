import React from 'react';
import { render } from '@testing-library/react';
import { ProductContext } from '../context/ProductContext';
import ProductDetail from '../components/ProductDetail';

test('renders product details correctly', () => {
  const mockContextValue = {
    currentPage: 1,
    setCurrentPage: vi.fn(),
    filteredProducts: [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }],
    itemsPerPage: 10,
  };


  render(
    <ProductContext.Provider value={mockContextValue}>
      <ProductDetail />
    </ProductContext.Provider>
  );
});
