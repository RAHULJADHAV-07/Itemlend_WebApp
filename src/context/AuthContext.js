import React, { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('itemlend_user', null);
  const [products, setProducts] = useLocalStorage('itemlend_products', []);

  const login = (userData) => {
    setUser({
      ...userData,
      id: Date.now(), // Simple ID generation for demo
      loginTime: new Date().toISOString()
    });
  };

  const logout = () => {
    setUser(null);
    setProducts([]);
  };

  const addProduct = (productData) => {
    const newProduct = {
      ...productData,
      id: Date.now(),
      lenderId: user.id,
      location: user.location || productData.location,
      isAvailable: true,
      createdAt: new Date().toISOString()
    };
    
    setProducts(prevProducts => [...prevProducts, newProduct]);
    return newProduct;
  };

  const updateProduct = (productId, updates) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === productId 
          ? { ...product, ...updates, updatedAt: new Date().toISOString() }
          : product
      )
    );
  };

  const deleteProduct = (productId) => {
    setProducts(prevProducts => 
      prevProducts.filter(product => product.id !== productId)
    );
  };

  const getUserProducts = () => {
    return products.filter(product => product.lenderId === user?.id);
  };

  const isAuthenticated = !!user;
  const isLender = user?.role === 'lender';
  const isBorrower = user?.role === 'borrower';

  const value = {
    user,
    products,
    isAuthenticated,
    isLender,
    isBorrower,
    login,
    logout,
    addProduct,
    updateProduct,
    deleteProduct,
    getUserProducts
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
