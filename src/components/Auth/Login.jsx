import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { validateEmail, validateName, validateRequired } from '../../utils/validators';
import Input from '../Shared/Input';
import Button from '../Shared/Button';

const Login = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    phone: '',
    location: ''
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
    const newErrors = {};

    if (!validateRequired(formData.role)) {
      newErrors.role = 'Please select a role';
    }

    if (!validateName(formData.name)) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!validateRequired(formData.phone)) {
      newErrors.phone = 'Phone number is required';
    }

    if (!validateRequired(formData.location)) {
      newErrors.location = 'Location is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    login(formData);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 relative overflow-hidden">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 opacity-70"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-400/20 rounded-full animate-bounce delay-700"></div>
      <div className="absolute bottom-32 right-10 w-12 h-12 bg-pink-400/20 rounded-full animate-pulse delay-300"></div>
      
      <div className="relative max-w-2xl w-full space-y-8 animate-fade-in">
        <div className="text-center">
          <div className="mx-auto w-24 h-24 bg-white rounded-2xl shadow-2xl flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">IL</span>
            </div>
          </div>
          <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Welcome to ItemLend
          </h2>
          <p className="text-xl text-white/90 font-medium">
            Your marketplace for everything
          </p>
        </div>

        <form onSubmit={handleSubmit} className="login-form p-8 space-y-6">
          {/* Role Selection */}
          <div className="form-group">
            <label className="block text-lg font-bold text-white mb-4">
              Choose Your Journey <span className="text-red-400">*</span>
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="role-card relative flex flex-col items-center p-6 border-2 border-gray-600 rounded-2xl cursor-pointer hover:border-green-400 hover:bg-gray-700/50 transition-all duration-300 group transform hover:scale-105 hover:shadow-lg">
                <input
                  type="radio"
                  name="role"
                  value="lender"
                  checked={formData.role === 'lender'}
                  onChange={handleInputChange('role')}
                  className="absolute top-3 right-3 w-5 h-5 text-green-400 focus:ring-green-400 bg-gray-800 border-gray-600"
                />
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 glow-green">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg text-white group-hover:text-green-400">Lend Items</div>
                  <div className="text-sm text-gray-300 mt-1">Share & earn money</div>
                </div>
              </label>
              <label className="role-card relative flex flex-col items-center p-6 border-2 border-gray-600 rounded-2xl cursor-pointer hover:border-blue-400 hover:bg-gray-700/50 transition-all duration-300 group transform hover:scale-105 hover:shadow-lg">
                <input
                  type="radio"
                  name="role"
                  value="borrower"
                  checked={formData.role === 'borrower'}
                  onChange={handleInputChange('role')}
                  className="absolute top-3 right-3 w-5 h-5 text-blue-400 focus:ring-blue-400 bg-gray-800 border-gray-600"
                />
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 glow-blue">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg text-white group-hover:text-blue-400">Borrow Items</div>
                  <div className="text-sm text-gray-300 mt-1">Find what you need</div>
                </div>
              </label>
            </div>
            {errors.role && (
              <div className="mt-3 text-sm text-red-400 bg-red-900/30 p-3 rounded-xl border border-red-500/30 font-medium">{errors.role}</div>
            )}
          </div>

          {/* Input Fields in 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Full Name"
              type="text"
              value={formData.name}
              onChange={handleInputChange('name')}
              error={errors.name}
              placeholder="Enter your full name"
              required
            />

            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleInputChange('email')}
              error={errors.email}
              placeholder="Enter your email address"
              required
            />

            <Input
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange('phone')}
              error={errors.phone}
              placeholder="Enter your phone number"
              required
            />

            <Input
              label="Location"
              type="text"
              value={formData.location}
              onChange={handleInputChange('location')}
              error={errors.location}
              placeholder="City, State"
              required
            />
          </div>

          <Button
            type="submit"
            loading={isLoading}
            className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
            size="large"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin h-6 w-6 border-3 border-white border-t-transparent rounded-full mr-3"></div>
                Creating Your Account...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <span>🚀 Start Your Journey</span>
              </div>
            )}
          </Button>
          
          <div className="text-center pt-4">
            <p className="text-gray-600">
              Join thousands of users already sharing and borrowing items!
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
