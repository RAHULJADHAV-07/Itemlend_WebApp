import React from 'react';
import '../../styles/main.css';

const UserProfileCard = ({ user, showContact = false }) => {
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      // Show temporary feedback
      const element = document.querySelector(`[data-copy="${type}"]`);
      if (element) {
        element.classList.add('copied');
        setTimeout(() => {
          element.classList.remove('copied');
        }, 2000);
      }
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  };

  return (
    <div className="card-product p-6">
      <div className="flex items-start space-x-4">
        {/* Avatar */}
        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-none">
          {user.name?.charAt(0)?.toUpperCase()}
        </div>

        {/* User Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-white mb-1">
            {user.name}
          </h3>
          <div className="flex items-center text-sm text-gray-300 mb-2">
            <span className="capitalize px-2 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-md text-xs font-medium text-purple-300">
              {user.role}
            </span>
          </div>
          
          {user.location && (
            <div className="flex items-center text-sm text-gray-300 mb-2">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {user.location}
            </div>
          )}

          {showContact && (
            <div className="space-y-2 mt-4">
              <div className="text-sm font-medium text-gray-200">
                Contact Information:
              </div>
              
              {user.email && (
                <div className="flex items-center justify-between bg-gray-700/50 border border-gray-600 p-2 rounded-md">
                  <div className="flex items-center text-sm">
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-gray-300">{user.email}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(user.email, 'email')}
                    className="copy-button text-blue-400 hover:text-blue-300 text-xs px-2 py-1 border border-blue-500/50 hover:border-blue-400 rounded transition-colors bg-blue-500/10 hover:bg-blue-500/20"
                    data-copy="email"
                  >
                    Copy
                  </button>
                </div>
              )}

              {user.phone && (
                <div className="flex items-center justify-between bg-gray-700/50 border border-gray-600 p-2 rounded-md">
                  <div className="flex items-center text-sm">
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-gray-300">{user.phone}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(user.phone, 'phone')}
                    className="copy-button text-blue-400 hover:text-blue-300 text-xs px-2 py-1 border border-blue-500/50 hover:border-blue-400 rounded transition-colors bg-blue-500/10 hover:bg-blue-500/20"
                    data-copy="phone"
                  >
                    Copy
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
