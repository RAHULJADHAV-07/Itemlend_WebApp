import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Input from '../Shared/Input';
import Button from '../Shared/Button';
import { categories } from '../../data/dummyData';
import '../../styles/main.css';

const ProductList = ({ 
  products, 
  onViewDetails, 
  onExpressInterest, 
  showInterestButton = false,
  showFilters = true 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showFiltersPanel, setShowFiltersPanel] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesSearch = !searchQuery || 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    
    const matchesLocation = !locationFilter || 
      product.location.toLowerCase().includes(locationFilter.toLowerCase());
    
    const matchesPrice = !maxPrice || product.lendPricePerDay <= parseFloat(maxPrice);

    return matchesSearch && matchesCategory && matchesLocation && matchesPrice;
  });

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setLocationFilter('');
    setMaxPrice('');
  };

  return (
    <div className="space-y-6">
      {showFilters && (
        <div className="filter-container">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <Button
              variant="outline"
              onClick={() => setShowFiltersPanel(!showFiltersPanel)}
              className="w-full"
            >
              {showFiltersPanel ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>

          {/* Search Bar */}
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md input-field"
            />
          </div>

          {/* Filters */}
          <div className={`${showFiltersPanel || 'hidden md:block'}`}>
            <div className="filter-grid">
              <div className="filter-item">
                <label className="filter-label">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="select-field"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-item">
                <label className="filter-label">Location</label>
                <input
                  type="text"
                  placeholder="City, State"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="input-field"
                />
              </div>

              <div className="filter-item">
                <label className="filter-label">Max Price per Day</label>
                <input
                  type="number"
                  placeholder="e.g., 50"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  min="0"
                  step="1"
                  className="input-field"
                />
              </div>

              <div>
                <button
                  onClick={clearFilters}
                  className="clear-filters-btn"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          {filteredProducts.length} items found
        </h2>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
              onExpressInterest={onExpressInterest}
              showInterestButton={showInterestButton}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📦</div>
          <h3 className="text-lg font-medium text-white mb-2">
            No items found
          </h3>
          <p className="text-gray-300 mb-4">
            Try adjusting your search criteria or filters.
          </p>
          <Button variant="outline" onClick={clearFilters}>
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
