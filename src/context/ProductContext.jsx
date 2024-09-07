import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState(null);
  const [popularityFilter, setPopularityFilter] = useState(null);
  const [sort, setSort] = useState({ by: 'price', order: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://cdn.drcode.ai/interview-materials/products.json');
        const data = await response.json();
        setProducts(Object.values(data.products));
        setFilteredProducts(Object.values(data.products));
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product data');
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let result = [...products];

    if (searchTerm) {
      result = result.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (priceFilter) {
      result = result.filter(product => {
        const price = parseInt(product.price);
        return price >= priceFilter[0] && price <= priceFilter[1];
      });
    }

    if (popularityFilter) {
      result = result.filter(product => {
        const popularity = parseInt(product.popularity);
        return popularity >= popularityFilter[0] && popularity <= popularityFilter[1];
      });
    }

    if (sort.by) {
      result.sort((a, b) => {
        if (sort.order === 'asc') {
          return a[sort.by] - b[sort.by];
        } else {
          return b[sort.by] - a[sort.by];
        }
      });
    }

    setFilteredProducts(result);
  }, [products, searchTerm, priceFilter, popularityFilter, sort]);

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        priceFilter,
        setPriceFilter,
        popularityFilter,
        setPopularityFilter,
        sort,
        setSort,
        currentPage,
        setCurrentPage,
        itemsPerPage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
