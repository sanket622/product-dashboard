import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ProductContext } from '../context/ProductContext'; 
import Pagination from '../components/Pagination'; 
import { vi } from 'vitest';

describe('Pagination Component', () => {
  it('should call setCurrentPage with the correct value when clicking the next button', () => {
    const mockSetCurrentPage = vi.fn(); 

    // Mock context value
    const mockContextValue = {
      currentPage: 2,
      setCurrentPage: mockSetCurrentPage,
      filteredProducts: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
      itemsPerPage: 2,
    };

  
    const { getByText } = render(
      <ProductContext.Provider value={mockContextValue}>
        <Pagination />
      </ProductContext.Provider>
    );


    const nextButton = getByText(/next/i); 
    fireEvent.click(nextButton);

    expect(mockSetCurrentPage).toHaveBeenCalledWith(3); 
  });
});
