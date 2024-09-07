Deployment Link = https://product-dashboard-henna.vercel.app/

                                             Product Dashboard

### This project is a React application for managing and displaying a list of products. It features a dashboard that includes search, filtering, and pagination functionalities. The project is set up using Vite for build tooling and includes configuration for testing with Jest and Vitest.

## Getting Started

Prerequisites:

1. Ensure you have Node.js and npm installed. You can download and install them from nodejs.org.

## Setup

Clone the repository:

1. git clone https://github.com/sanket622/product-dashboard.git
2. cd product-dashboard

## Install dependencies:

Run the following command to install the necessary dependencies: 

1. npm install @testing-library/react @testing-library/jest-dom vitest --save-dev

## Configuration:

1. No additional configuration is required. By default, the project is set up to run on http://localhost:5173/.

## Running the Project

To start the development server and run the project locally 

=> npm run dev
=> Open your browser and navigate to http://localhost:5173/ to view the application.

## Testing

1. The project uses Jest and Vitest for testing. To run tests, use the following command:

=> npm test

## Key Components

1. ProductContext (context/ProductContext.js): Provides global state management for product data, search term, filters, and pagination.
2. Functions: fetchProducts(): Fetches product data from an API and updates state.
3. useEffect(): Applies filters, sorting, and pagination based on state changes.
4. Dashboard (pages/Dashboard.js):
5. Main component that displays the product dashboard. Includes components for search, filters, product listing, and product details.
6. SearchBar (components/SearchBar.js): Provides a text input for searching products by title.
7. Filters (components/Filters.js): Allows users to filter products based on price and popularity ranges.
8. ProductList (components/ProductList.js): Displays a paginated list of products in a table format. Includes sorting functionality by title, price, and popularity.
9. ProductDetail (components/ProductDetail.js): Shows detailed information for a selected product. Includes a pagination component to navigate through products.
10. Pagination (components/Pagination.js): Provides navigation buttons to move between pages of products.

## Vite Configuration

1. The Vite configuration is found in vite.config.js:

## Vitest Configuration

1. The Vitest configuration is found in vitest.config.ts:
