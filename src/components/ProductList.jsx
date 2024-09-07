import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const ProductList = () => {
  const {
    filteredProducts,
    loading,
    error,
    setSort,
    currentPage,
    itemsPerPage,
  } = useContext(ProductContext);

  const handleSort = (field) => {
    setSort((prevSort) => ({
      by: field,
      order: prevSort.by === field && prevSort.order === 'asc' ? 'desc' : 'asc',
    }));
  };

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
     <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
  <thead>
    <tr>
      <th
        onClick={() => handleSort('title')}
        style={{
          padding: '10px 20px',
          borderBottom: '2px solid #ddd',
          cursor: 'pointer',
          textAlign: 'left',
          backgroundColor: '#f9f9f9',
        }}
      >
        Title
      </th>
      <th
        onClick={() => handleSort('price')}
        style={{
          padding: '10px 20px',
          borderBottom: '2px solid #ddd',
          cursor: 'pointer',
          textAlign: 'left',
          backgroundColor: '#f9f9f9',
        }}
      >
        Price
      </th>
      <th
        onClick={() => handleSort('popularity')}
        style={{
          padding: '10px 20px',
          borderBottom: '2px solid #ddd',
          cursor: 'pointer',
          textAlign: 'left',
          backgroundColor: '#f9f9f9',
        }}
      >
        Popularity
      </th>
    </tr>
  </thead>
  <tbody>
    {currentProducts.map((product) => (
      <tr key={product.title} style={{ borderBottom: '1px solid #eee' }}>
        <td style={{ padding: '10px 20px' }}>{product.title}</td>
        <td style={{ padding: '10px 20px' }}>{product.price}</td>
        <td style={{ padding: '10px 20px' }}>{product.popularity}</td>
      </tr>
    ))}
  </tbody>
</table>
    </>
  );
};

export default ProductList;
