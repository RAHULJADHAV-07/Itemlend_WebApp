import React from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import LenderView from './LenderView';
import BorrowerView from './BorrowerView';

const Dashboard = () => {
  const { user, isLender, isBorrower } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-bg">
        <div className="text-center bg-white p-12 rounded-2xl shadow-2xl max-w-md">
          <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-2xl">IL</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to ItemLend
          </h2>
          <p className="text-gray-600 text-lg">
            Please log in to access your dashboard.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg">
      {/* Hero Section */}
      <div className="hero-section py-16 px-4">
        <div className="max-w-7xl mx-auto text-center animate-section">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg animate-fade-in">
            Welcome back, {user.name}! 🎉
          </h1>
          <p className="text-xl text-white/90 mb-8">
            {isLender 
              ? "Manage your items and track lending activity." 
              : "Discover and borrow items from the community."
            }
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="stats-card">
              <div className="text-3xl font-bold text-purple-400">150+</div>
              <div className="text-gray-300">Items Available</div>
            </div>
            <div className="stats-card">
              <div className="text-3xl font-bold text-blue-400">50+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="stats-card">
              <div className="text-3xl font-bold text-orange-400">95%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 animate-section">
        {isLender && <LenderView />}
        {isBorrower && <BorrowerView />}
      </div>
    </div>
  );
};

export default Dashboard;
