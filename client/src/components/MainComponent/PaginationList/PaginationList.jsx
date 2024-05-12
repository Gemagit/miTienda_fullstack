import React, { useState } from 'react';

function Pagination({ totalPages, currentPage, onPageChange }) {

  const goToNextPage = () => {
    onPageChange(currentPage + 1);
  };

  const goToPrevPage = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <div className="pagination">
      {currentPage === 0 && totalPages > 1 && (
        <button className="next-button" onClick={goToNextPage}>Siguiente &rarr;</button>
      )}
      {currentPage > 0 && currentPage < totalPages - 1 && (
        <>
          <button className="prev-button" onClick={goToPrevPage}>&larr; Anterior</button>
          <button className="next-button" onClick={goToNextPage}>Siguiente &rarr;</button>
        </>
      )}
      {currentPage === totalPages - 1 && (
        <button className="prev-button" onClick={goToPrevPage}>&larr; Anterior</button>
      )}
    </div>
  );
}

export default Pagination;




