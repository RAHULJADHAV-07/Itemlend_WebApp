import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useToast } from '../components/Layout/Toast';
import ProductList from '../components/Product/ProductList';
import UserProfileCard from '../components/User/UserProfileCard';
import Button from '../components/Shared/Button';
import { dummyProducts, getUserById, getAvailableProducts } from '../data/dummyData';
import '../styles/main.css';

const BorrowerView = () => {
  const { user } = useAuth();
  const { showSuccess, ToastContainer } = useToast();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showInterestModal, setShowInterestModal] = useState(false);
  const [interestProduct, setInterestProduct] = useState(null);

  const availableProducts = getAvailableProducts().filter(p => p.lenderId !== user.id);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  const handleExpressInterest = (product) => {
    setInterestProduct(product);
    setShowInterestModal(true);
  };

  const handleInterestSubmit = () => {
    showSuccess(`Interest expressed for "${interestProduct.title}"! The lender will be notified.`);
    setShowInterestModal(false);
    setInterestProduct(null);
  };

  const handleInterestCancel = () => {
    setShowInterestModal(false);
    setInterestProduct(null);
  };

  if (selectedProduct) {
    const lender = getUserById(selectedProduct.lenderId);
    
    return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Button
            variant="outline"
            onClick={handleCloseDetails}
            size="small"
          >
            ← Back to Browse
          </Button>
        </div>

        <div className="detail-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="detail-image-container">
              <img
                src={selectedProduct.images?.[0] || `https://via.placeholder.com/600x400/e5e7eb/6b7280?text=${encodeURIComponent(selectedProduct.title)}`}
                alt={selectedProduct.title}
                className="detail-image"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  selectedProduct.condition === 'New' ? 'bg-success text-white' :
                  selectedProduct.condition === 'Like New' ? 'bg-info text-white' :
                  selectedProduct.condition === 'Good' ? 'bg-warning text-white' :
                  'bg-gray-400 text-white'
                }`}>
                  {selectedProduct.condition}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-white mb-4">
                {selectedProduct.title}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl font-bold text-primary">
                  ${selectedProduct.lendPricePerDay}/day
                </div>
                {selectedProduct.salePrice && (
                  <div className="text-lg text-gray-400">
                    Sale: ${selectedProduct.salePrice}
                  </div>
                )}
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-white mb-2">Description</h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <span className="font-medium text-purple-400">Category:</span>
                  <br />
                  <span className="text-gray-300">{selectedProduct.category}</span>
                </div>
                <div>
                  <span className="font-medium text-blue-400">Location:</span>
                  <br />
                  <span className="text-gray-300">{selectedProduct.location}</span>
                </div>
                <div>
                  <span className="font-medium text-orange-400">Available From:</span>
                  <br />
                  <span className="text-gray-300">{new Date(selectedProduct.availableFrom).toLocaleDateString()}</span>
                </div>
                <div>
                  <span className="font-medium text-green-400">Available To:</span>
                  <br />
                  <span className="text-gray-300">{new Date(selectedProduct.availableTo).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="mb-6">
                <Button
                  onClick={() => handleExpressInterest(selectedProduct)}
                  size="large"
                  className="w-full btn-primary"
                >
                  Express Interest
                </Button>
              </div>

              {lender && (
                <div className="border-t border-gray-600 pt-6">
                  <h3 className="font-semibold text-white mb-3">Lender Contact Info</h3>
                  <UserProfileCard user={lender} showContact={true} />
                </div>
              )}
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4">
      {/* Profile Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <UserProfileCard user={user} />
        </div>

        {/* Stats */}
        <div className="lg:col-span-3 min-w-0">
          <div className="stats-grid">
            <div className="stats-card-compact">
              <div className="text-3xl font-bold text-primary mb-2">
                {availableProducts.length}
              </div>
              <div className="text-gray-300">Available Items</div>
            </div>
            <div className="stats-card-compact">
              <div className="text-3xl font-bold text-secondary mb-2">
                {new Set(availableProducts.map(p => p.category)).size}
              </div>
              <div className="text-gray-300">Categories</div>
            </div>
            <div className="stats-card-compact">
              <div className="text-3xl font-bold text-accent mb-2">
                ${Math.min(...availableProducts.map(p => p.lendPricePerDay)).toFixed(0)}
              </div>
              <div className="text-gray-300">Starting From/Day</div>
            </div>
          </div>
        </div>
      </div>

      {/* Browse Items */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">Browse Available Items</h2>
          <p className="text-gray-300 mt-2">
            Discover items available for rent in your community.
          </p>
        </div>

        <ProductList
          products={availableProducts}
          onViewDetails={handleViewDetails}
          onExpressInterest={handleExpressInterest}
          showInterestButton={true}
          showFilters={true}
        />
      </div>

      {/* Interest Modal */}
      {showInterestModal && (
        <div className="modal-backdrop" onClick={handleInterestCancel}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Express Interest
              </h3>
              <p className="text-gray-600 mb-6">
                Are you interested in renting "{interestProduct?.title}"? 
                The lender will be notified of your interest and can contact you directly.
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={handleInterestSubmit}
                  className="flex-1"
                >
                  Yes, I'm Interested
                </Button>
                <Button
                  variant="outline"
                  onClick={handleInterestCancel}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default BorrowerView;
