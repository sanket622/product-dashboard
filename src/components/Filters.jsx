import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const Filters = () => {
  const { setPriceFilter, setPopularityFilter } = useContext(ProductContext);

  return (
    <div>
      <h4>Price Range</h4>
      <button onClick={() => setPriceFilter([0, 5000])}>0-5000</button>
      <button onClick={() => setPriceFilter([5000, 10000])}>5000-10000</button>
      <button onClick={() => setPriceFilter([10000, 20000])}>10000-20000</button>
      <button onClick={() => setPriceFilter([20000, Infinity])}>20000+</button>

      <h4>Popularity Range</h4>
      <button onClick={() => setPopularityFilter([0, 10000])}>0-10000</button>
      <button onClick={() => setPopularityFilter([10000, 30000])}>10000-30000</button>
      <button onClick={() => setPopularityFilter([30000, 50000])}>30000-50000</button>
      <button onClick={() => setPopularityFilter([50000, Infinity])}>50000+</button>
    </div>
  );
};

export default Filters;
