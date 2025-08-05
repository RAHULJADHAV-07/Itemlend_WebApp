import React from 'react';
import { getUserById } from '../../data/dummyData';
import Button from '../Shared/Button';
import '../../styles/main.css';

const ProductCard = ({ product, onViewDetails, onExpressInterest, showInterestButton = false }) => {
  const lender = getUserById(product.lenderId);
  
  const handleImageError = (e) => {
    e.target.src = `https://via.placeholder.com/400x250/e5e7eb/6b7280?text=${encodeURIComponent(product.title)}`;
  };

  return (
    <div className="card-product overflow-hidden">
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.images?.[0] || `https://via.placeholder.com/400x250/e5e7eb/6b7280?text=${encodeURIComponent(product.title)}`}
          alt={product.title}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            product.condition === 'New' ? 'bg-success text-white' :
            product.condition === 'Like New' ? 'bg-info text-white' :
            product.condition === 'Good' ? 'bg-warning text-white' :
            'bg-gray-400 text-white'
          }`}>
            {product.condition}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg text-white line-clamp-2">
            {product.title}
          </h3>
        </div>

        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-primary font-bold text-lg">
              ${product.lendPricePerDay}/day
            </div>
            {product.salePrice && (
              <div className="text-gray-400 text-sm">
                Sale: ${product.salePrice}
              </div>
            )}
          </div>
          <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md">
            {product.category}
          </span>
        </div>

        <div className="flex items-center text-sm text-gray-400 mb-4">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {product.location}
        </div>

        {lender && (
          <div className="flex items-center text-sm text-gray-300 mb-4">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-medium mr-2">
              {lender.name.charAt(0).toUpperCase()}
            </div>
            {lender.name}
          </div>
        )}

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="small"
            onClick={() => onViewDetails(product)}
            className="flex-1"
          >
            View Details
          </Button>
          {showInterestButton && (
            <Button
              variant="primary"
              size="small"
              onClick={() => onExpressInterest(product)}
              className="flex-1"
            >
              Express Interest
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
