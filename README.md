# ItemLend - Community Item Lending Platform

A modern, responsive React web application that enables community members to lend and borrow items from each other. Built with React, Vite, and vanilla CSS for a clean, professional user experience.

## Features

### 🔐 Authentication & Role Management
- **Role-based login** - Users can sign up as either Lenders or Borrowers
- **Persistent sessions** - User data stored in localStorage
- **Profile management** - User profiles with contact information

### 👥 For Lenders
- **Add items** - Create listings with detailed information (title, description, category, condition, pricing, availability dates, location, images)
- **Manage inventory** - View all your listed items with comprehensive filtering
- **Form validation** - Real-time validation with inline error messages
- **Dashboard analytics** - Track total items, availability, and potential earnings
- **Contact sharing** - Automatic contact information sharing with interested borrowers

### 🔍 For Borrowers
- **Browse items** - Explore available items with advanced filtering and search
- **Filter & search** - Filter by category, location, price range, and search by keywords
- **Express interest** - Contact lenders directly through interest expressions
- **View details** - Comprehensive item details with lender contact information
- **Responsive design** - Optimized for all device sizes

### 🎨 Design & UX
- **Modern, clean interface** - Professional design with consistent styling
- **Responsive layout** - Mobile-first design that works on all devices
- **Micro-interactions** - Smooth hover effects, button animations, and transitions
- **Toast notifications** - User feedback for all actions
- **Loading states** - Visual feedback during form submissions
- **Copy-to-clipboard** - Easy copying of contact information

### 🛠 Technical Features
- **No external UI frameworks** - Pure CSS with CSS custom properties (variables)
- **Form validation** - Comprehensive client-side validation
- **Local storage persistence** - Session and data persistence
- **Dummy data** - 15+ diverse product listings across multiple categories
- **Error handling** - Graceful error handling throughout the application
- **Accessibility** - Screen reader friendly with proper ARIA labels

## Project Structure

```
item-lend-app/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── data/
│   │   └── dummyData.js         # Sample users and products
│   ├── context/
│   │   └── AuthContext.js       # Authentication state management
│   ├── hooks/
│   │   └── useLocalStorage.js   # Custom localStorage hook
│   ├── components/
│   │   ├── Auth/
│   │   │   └── Login.jsx         # Role selection and login
│   │   ├── Product/
│   │   │   ├── ProductCard.jsx   # Product display component
│   │   │   ├── ProductList.jsx   # Product listing with filters
│   │   │   └── AddProductForm.jsx # Product creation form
│   │   ├── User/
│   │   │   └── UserProfileCard.jsx # User profile display
│   │   ├── Layout/
│   │   │   ├── Navbar.jsx        # Navigation component
│   │   │   └── Toast.jsx         # Notification system
│   │   └── Shared/
│   │       ├── Button.jsx        # Reusable button component
│   │       └── Input.jsx         # Reusable input component
│   ├── pages/
│   │   ├── Dashboard.jsx         # Role-aware main page
│   │   ├── LenderView.jsx        # Lender interface
│   │   └── BorrowerView.jsx      # Borrower interface
│   ├── styles/
│   │   ├── reset.css             # CSS reset
│   │   ├── variables.css         # CSS custom properties
│   │   └── main.css              # Main application styles
│   ├── utils/
│   │   └── validators.js         # Form validation utilities
│   ├── App.jsx                   # Main application component
│   └── main.jsx                  # Application entry point
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd item-lend-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Usage Guide

### Getting Started
1. **Sign Up**: Choose your role (Lender or Borrower) and fill in your information
2. **Profile**: Your session will be saved automatically

### For Lenders
1. **Add Items**: Click "Add New Item" to create listings
2. **Manage**: View and manage all your items from the dashboard
3. **Track**: Monitor your inventory and potential earnings

### For Borrowers
1. **Browse**: Explore available items using filters and search
2. **Details**: Click "View Details" for comprehensive item information
3. **Interest**: Express interest to connect with lenders
4. **Contact**: Copy lender contact information for direct communication

## Data Model

### User Object
```javascript
{
  id: number,
  name: string,
  email: string,
  role: 'lender' | 'borrower',
  phone: string,
  location: string
}
```

### Product Object
```javascript
{
  id: number,
  title: string,
  description: string,
  category: string,
  condition: 'New' | 'Like New' | 'Good' | 'Fair' | 'Poor',
  lendPricePerDay: number,
  salePrice: number | null,
  availableFrom: string,
  availableTo: string,
  location: string,
  lenderId: number,
  images: string[],
  isAvailable: boolean
}
```

## Categories

The application supports the following item categories:
- Electronics
- Tools
- Sports Equipment
- Home & Garden
- Vehicles
- Photography
- Music Instruments
- Books & Education
- Clothing
- Furniture
- Kitchen & Dining
- Toys & Games

## Form Validation

### User Registration
- Name: Minimum 2 characters
- Email: Valid email format
- Phone: Required field
- Location: Minimum 2 characters
- Role: Must select lender or borrower

### Product Creation
- Title: Required
- Description: 10-500 characters
- Category: Must select from available options
- Condition: Must select condition level
- Lend Price: Must be positive number
- Sale Price: Optional, must be positive if provided
- Availability Dates: Start date must be today or later, end date must be after start date
- Location: Required

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Future Enhancements

- **Backend Integration**: Connect to a real backend API
- **User Authentication**: Implement secure authentication with JWT
- **Payment Processing**: Add payment gateway integration
- **Messaging System**: In-app messaging between users
- **Rating System**: User and item ratings
- **Advanced Search**: Location-based search with maps
- **Image Upload**: Direct image upload functionality
- **Email Notifications**: Automated email notifications
- **Mobile App**: React Native mobile application

## Support

For support, email support@itemlend.com or create an issue in the repository.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
#   I t e m l e n d _ W e b A p p  
 