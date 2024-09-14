DEPLOYMENT LINK = https://product-dashboard-henna.vercel.app/

- (pre-requisite -> Allow CORS in Browser).



### PRODUCT DASHBOARD



- This project is a React application for managing and displaying a list of products. It features a dashboard   that includes search, filtering, and pagination functionalities. The project is set up using Vite for build tooling and includes configuration for testing with Jest and Vitest.

## Getting Started

Prerequisites:

- Ensure you have Node.js and npm installed. You can download and install them from nodejs.org.
- Download [Allow CORS: Access-Control-Allow-Origin] => Browser extension to handle CORS issues during local   development.

## Setup

Clone the repository:

- git clone https://github.com/sanket622/product-dashboard.git
- cd product-dashboard

## Install dependencies:

Run the following command to install the necessary dependencies: 

- npm install @testing-library/react @testing-library/jest-dom vitest --save-dev

## Configuration:

- No additional configuration is required. By default, the project is set up to run on http://localhost:5173/.

## Running the Project

To start the development server and run the project locally 

- npm run dev
- Open your browser and navigate to http://localhost:5173/ to view the application.

## Testing

The project uses Jest and Vitest for testing. To run tests, use the following command:

- npm test

## Key Components

- ProductContext (context/ProductContext.js): Provides global state management for product data, search term, filters, and pagination.
- Functions: fetchProducts(): Fetches product data from an API and updates state.
- useEffect(): Applies filters, sorting, and pagination based on state changes.
- Dashboard (pages/Dashboard.js):
- Main component that displays the product dashboard. Includes components for search, filters, product listing, and product details.
- SearchBar (components/SearchBar.js): Provides a text input for searching products by title.
- Filters (components/Filters.js): Allows users to filter products based on price and popularity ranges.
- ProductList (components/ProductList.js): Displays a paginated list of products in a table format. Includes sorting functionality by title, price, and popularity.
- ProductDetail (components/ProductDetail.js): Shows detailed information for a selected product. Includes a pagination component to navigate through products.
- Pagination (components/Pagination.js): Provides navigation buttons to move between pages of products.

## Vite Configuration

- The Vite configuration is found in vite.config.js:

## Vitest Configuration

- The Vitest configuration is found in vitest.config.ts:
