import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { 
  validateRequired, 
  validateDescription, 
  validatePrice, 
  validateAvailabilityDates,
  formatValidationErrors 
} from '../../utils/validators';
import { categories, conditions } from '../../data/dummyData';
import Input from '../Shared/Input';
import Button from '../Shared/Button';
import '../../styles/main.css';

const AddProductForm = ({ onSuccess, onCancel }) => {
  const { addProduct, user } = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    condition: '',
    lendPricePerDay: '',
    salePrice: '',
    availableFrom: '',
    availableTo: '',
    location: user?.location || '',
    images: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!validateRequired(formData.title)) {
      validationErrors.title = 'Title is required';
    }

    if (!validateDescription(formData.description)) {
      validationErrors.description = 'Description must be between 10-500 characters';
    }

    if (!validateRequired(formData.category)) {
      validationErrors.category = 'Please select a category';
    }

    if (!validateRequired(formData.condition)) {
      validationErrors.condition = 'Please select condition';
    }

    if (!validatePrice(formData.lendPricePerDay)) {
      validationErrors.lendPricePerDay = 'Please enter a valid price per day';
    }

    if (formData.salePrice && !validatePrice(formData.salePrice)) {
      validationErrors.salePrice = 'Please enter a valid sale price';
    }

    if (!validateRequired(formData.availableFrom) || !validateRequired(formData.availableTo)) {
      validationErrors.availableFrom = 'Please select availability dates';
    } else if (!validateAvailabilityDates(formData.availableFrom, formData.availableTo)) {
      validationErrors.availableFrom = 'Invalid date range. Start date should be today or later, and end date should be after start date.';
    }

    if (!validateRequired(formData.location)) {
      validationErrors.location = 'Location is required';
    }

    const formatted = formatValidationErrors(validationErrors);
    setErrors(formatted);
    return Object.keys(formatted).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const productData = {
        ...formData,
        lendPricePerDay: parseFloat(formData.lendPricePerDay),
        salePrice: formData.salePrice ? parseFloat(formData.salePrice) : null,
        images: formData.images ? [formData.images] : []
      };
      
      addProduct(productData);
      onSuccess('Product added successfully!');
    } catch (error) {
      setErrors({ general: 'Failed to add product. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  // Get tomorrow's date as minimum for availability
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="login-form p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Add New Item</h2>
          <Button variant="ghost" onClick={onCancel} size="small">
            Cancel
          </Button>
        </div>

        {errors.general && (
          <div className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-md">
            <p className="text-red-400 text-sm">{errors.general}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Item Title"
            type="text"
            value={formData.title}
            onChange={handleInputChange('title')}
            error={errors.title}
            placeholder="Enter item title"
            required
            className="input-field"
          />

          <div className="form-group">
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Description <span className="text-red-400">*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={handleInputChange('description')}
              placeholder="Describe your item in detail..."
              rows={4}
              className={`input-field resize-none ${
                errors.description ? 'border-red-500' : ''
              }`}
            />
            {errors.description && (
              <div className="text-red-400 text-sm mt-1">{errors.description}</div>
            )}
            <div className="text-xs text-gray-400 mt-1">
              {formData.description.length}/500 characters
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Category <span className="text-red-400">*</span>
              </label>
              <select
                value={formData.category}
                onChange={handleInputChange('category')}
                className={`select-field ${
                  errors.category ? 'border-red-500' : ''
                }`}
              >
                <option value="">Select Category</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && (
                <div className="text-red-400 text-sm mt-1">{errors.category}</div>
              )}
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Condition <span className="text-red-400">*</span>
              </label>
              <select
                value={formData.condition}
                onChange={handleInputChange('condition')}
                className={`select-field ${
                  errors.condition ? 'border-red-500' : ''
                }`}
              >
                <option value="">Select Condition</option>
                {conditions.map(condition => (
                  <option key={condition} value={condition}>
                    {condition}
                  </option>
                ))}
              </select>
              {errors.condition && (
                <div className="text-red-400 text-sm mt-1">{errors.condition}</div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Rent Price per Day ($)"
              type="number"
              value={formData.lendPricePerDay}
              onChange={handleInputChange('lendPricePerDay')}
              error={errors.lendPricePerDay}
              placeholder="e.g., 25"
              min="0"
              step="0.01"
              required
            />

            <Input
              label="Sale Price ($)"
              type="number"
              value={formData.salePrice}
              onChange={handleInputChange('salePrice')}
              error={errors.salePrice}
              placeholder="Optional - leave blank if not for sale"
              min="0"
              step="0.01"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Available From"
              type="date"
              value={formData.availableFrom}
              onChange={handleInputChange('availableFrom')}
              error={errors.availableFrom}
              min={minDate}
              required
            />

            <Input
              label="Available To"
              type="date"
              value={formData.availableTo}
              onChange={handleInputChange('availableTo')}
              min={formData.availableFrom || minDate}
              required
            />
          </div>

          <Input
            label="Location"
            type="text"
            value={formData.location}
            onChange={handleInputChange('location')}
            error={errors.location}
            placeholder="City, State"
            required
          />

          <Input
            label="Image URL"
            type="url"
            value={formData.images}
            onChange={handleInputChange('images')}
            placeholder="Optional - paste image URL"
          />

          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              loading={isLoading}
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading ? 'Adding Item...' : 'Add Item'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={isLoading}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
