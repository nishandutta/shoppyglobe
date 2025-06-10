import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import useFetchProductDetail from '../hooks/useFetchProductDetail';

export default function ProductDetail() {
  const { id } = useParams();
  const { product, error } = useFetchProductDetail(id);

  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-detail">
      <div className="product-image">
        <img
          src={product.thumbnail}
          alt={product.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
          }}
        />
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="description">{product.description}</p>
        <p className="price">Price: ${product.price}</p>
      </div>
    </div>
  );
}
