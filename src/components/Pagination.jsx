import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const Pagination = () => {
  const { currentPage, setCurrentPage, filteredProducts, itemsPerPage } = useContext(ProductContext);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(Math.min(currentPage + 1, totalPages));
  };

  return (
    <div
    style={{
      float: 'right',         
      fontSize: '0.8rem',     
      padding: '5px',         
      margin: '10px',         
    }}
  >
    <button
      onClick={handlePrev}
      disabled={currentPage === 1}
      style={{
        padding: '5px 10px',   
        marginRight: '5px',    
        fontSize: '0.8rem',    
      }}
    >
      Previous
    </button>
    <span
      style={{
        margin: '0 5px',       
      }}
    >
      {`Page ${currentPage} of ${totalPages}`}
    </span>
    <button
      onClick={handleNext}
      disabled={currentPage === totalPages}
      style={{
        padding: '5px 10px',   
        marginLeft: '5px',     
        fontSize: '0.8rem',    
      }}
    >
      Next
    </button>
  </div>  
  );
};

export default Pagination;
