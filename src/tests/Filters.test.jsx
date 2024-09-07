import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductContext } from '../context/ProductContext';
import Filters from '../components/Filters';
import { vi } from 'vitest';

const mockContextValue = {
  setPriceFilter: vi.fn(),
  setPopularityFilter: vi.fn(),
};

describe('Filters Component', () => {
  test('renders filter buttons correctly', () => {
    render(
      <ProductContext.Provider value={mockContextValue}>
        <Filters />
      </ProductContext.Provider>
    );

    expect(screen.getByText('0-5000')).toBeInTheDocument();
    expect(screen.getByText('5000-10000')).toBeInTheDocument();
    expect(screen.getByText('10000-20000')).toBeInTheDocument();
    expect(screen.getByText('20000+')).toBeInTheDocument();
    expect(screen.getByText('0-10000')).toBeInTheDocument();
    expect(screen.getByText('10000-30000')).toBeInTheDocument();
    expect(screen.getByText('30000-50000')).toBeInTheDocument();
    expect(screen.getByText('50000+')).toBeInTheDocument();
  });

  test('calls setPriceFilter on button click', () => {
    render(
      <ProductContext.Provider value={mockContextValue}>
        <Filters />
      </ProductContext.Provider>
    );

    fireEvent.click(screen.getByText('0-5000'));
    expect(mockContextValue.setPriceFilter).toHaveBeenCalledWith([0, 5000]);
  });

  test('calls setPopularityFilter on button click', () => {
    render(
      <ProductContext.Provider value={mockContextValue}>
        <Filters />
      </ProductContext.Provider>
    );

    fireEvent.click(screen.getByText('0-10000'));
    expect(mockContextValue.setPopularityFilter).toHaveBeenCalledWith([0, 10000]);
  });
});
