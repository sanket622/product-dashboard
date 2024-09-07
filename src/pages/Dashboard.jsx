import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import ProductDetail from '../components/ProductDetail';

const Dashboard = () => {
  const { filteredProducts } = useContext(ProductContext);

  return (
    <div className="container"> 
      <h1>Product Dashboard</h1>
      <SearchBar />
      <Filters />
      <ProductList /> 
      <br></br>
      {filteredProducts.length > 0 && (
        <ProductDetail product={filteredProducts[0]} /> 
      )}
    </div>
  );
};

export default Dashboard;
