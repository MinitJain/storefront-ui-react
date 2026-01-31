# FakeStore E-Commerce

A modern, responsive e-commerce storefront built with React 19, Vite, and the FakeStore API. Discover and explore a curated selection of products with an intuitive shopping interface.

## Features

- 🛍️ **Product Browsing** - Browse through a dynamic product catalog
- 🔍 **Product Details** - View detailed information about each product
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Clean and intuitive user interface
- 🔀 **Client-Side Routing** - Smooth navigation with React Router
- 💾 **State Management** - Efficient state management with Context API

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router v7
- **HTTP Client**: Axios
- **API**: FakeStore API
- **Styling**: CSS

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone <repository-url>
   cd FakeStore-Ecommerce
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── Components/
│   ├── Home.jsx          # Landing page
│   ├── Product.jsx       # Product listing page
│   └── productDetail.jsx # Product detail page
├── api/
│   └── ProductApi.jsx    # API integration with FakeStore
├── context/
│   └── ProductContext.jsx # Context API setup
├── App.jsx               # Main app component
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## API Reference

This project uses the [FakeStore API](https://fakestoreapi.com/) for product data.

### Endpoints Used

- `GET /products` - Fetch all products

## License

This project is open source and available under the MIT License.

## Author

Created as a learning project for React and modern web development practices.
