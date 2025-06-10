import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';
import useFetchProducts from '../hooks/useFetchProducts'; // Custom hook

export default function ProductList() {
  const { products, loading, error } = useFetchProducts();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list-container">
      <div className="product-search">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && <p>Loading products...</p>}
      {error && <p>Failed to load products. Please try again later.</p>}

      {!loading && !error && filteredProducts.length === 0 && (
        <p className="no-products">Product not available</p>
      )}

      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
