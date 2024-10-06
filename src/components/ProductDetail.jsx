import React from 'react';
import Pagination from './Pagination';
const ProductDetail = ({ product }) => {
  if (!product) return null;

  return ( 
    <div
    style={{
      textAlign: 'left',      
      padding: '10px',         
      margin: '0',             
      width: '100%',           
    }}
  >
    <h2 style={{ margin: '0 0 10px 0', fontSize: '1.5rem', color: '#333' }}>
      {product.title}
    </h2>
    <p style={{ margin: '5px 0', fontSize: '1rem', color: '#666' }}>
      Price: {product.price}
    </p>
    <p style={{ margin: '5px 0', fontSize: '1rem', color: '#666' }}>
      Popularity: {product.popularity}
    </p>
    <br></br>
    <Pagination />
  </div>
   ); };
  
  export default ProductDetail;