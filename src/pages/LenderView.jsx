import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useToast } from '../components/Layout/Toast';
import ProductList from '../components/Product/ProductList';
import AddProductForm from '../components/Product/AddProductForm';
import UserProfileCard from '../components/User/UserProfileCard';
import Button from '../components/Shared/Button';
import { dummyProducts, getUserById } from '../data/dummyData';
import '../styles/main.css';

const LenderView = () => {
  const { user, getUserProducts } = useAuth();
  const { showSuccess, ToastContainer } = useToast();
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const userProducts = getUserProducts();
  const allUserProducts = [...userProducts, ...dummyProducts.filter(p => p.lenderId === user.id)];

  const handleAddSuccess = (message) => {
    showSuccess(message);
    setShowAddForm(false);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  if (showAddForm) {
    return (
      <div>
        <AddProductForm
          onSuccess={handleAddSuccess}
          onCancel={() => setShowAddForm(false)}
        />
        <ToastContainer />
      </div>
    );
  }

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
            ← Back to My Items
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

              {lender && (
                <div className="border-t border-gray-600 pt-6">
                  <h3 className="font-semibold text-white mb-3">Your Contact Info</h3>
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <UserProfileCard user={user} />
          <div className="mt-6">
            <Button
              onClick={() => setShowAddForm(true)}
              className="w-full"
              size="large"
            >
              + Add New Item
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="lg:col-span-2 min-w-0">
          <div className="stats-grid">
            <div className="stats-card-compact">
              <div className="text-3xl font-bold text-primary mb-2">
                {allUserProducts.length}
              </div>
              <div className="text-gray-300">Total Items</div>
            </div>
            <div className="stats-card-compact">
              <div className="text-3xl font-bold text-secondary mb-2">
                {allUserProducts.filter(p => p.isAvailable).length}
              </div>
              <div className="text-gray-300">Available</div>
            </div>
            <div className="stats-card-compact">
              <div className="text-3xl font-bold text-accent mb-2">
                ${allUserProducts.reduce((sum, p) => sum + p.lendPricePerDay, 0).toFixed(0)}
              </div>
              <div className="text-gray-300">Total Daily Value</div>
            </div>
          </div>
        </div>
      </div>

      {/* My Items */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">My Items</h2>
        </div>

        {allUserProducts.length > 0 ? (
          <ProductList
            products={allUserProducts}
            onViewDetails={handleViewDetails}
            showFilters={false}
            showInterestButton={false}
          />
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📦</div>
            <h3 className="text-lg font-medium text-white mb-2">
              No items yet
            </h3>
            <p className="text-gray-300 mb-4">
              Start by adding your first item to lend.
            </p>
            <Button onClick={() => setShowAddForm(true)}>
              Add Your First Item
            </Button>
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default LenderView;
