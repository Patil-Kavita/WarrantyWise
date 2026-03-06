# WarrantyWise Frontend

This is a modern React web application built for the Warranty Management System "WarrantyWise". It features a clean, soft SaaS dashboard design with a responsive layout.

## Technologies Used
- **React 18** (via Vite)
- **TypeScript**
- **Tailwind CSS v3**
- **React Router**
- **React Icons**

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Installation
1. Open up a terminal and navigate to the frontend directory:
   ```bash
   cd frontend/warranty-ui
   ```
2. Install the necessary Node dependencies using npm:
   ```bash
   npm install
   ```

### Running the Application Locally
After installing the dependencies, you can start the local development server:
```bash
npm run dev
```

The application will start, and you can view it in your browser at [http://localhost:3000](http://localhost:3000).

---

### Project Structure Overview

- `src/pages/`
  - `Login.tsx`: Authentication screen
  - `Dashboard.tsx`: Main overview with warranty statistics and active/expired products grid
  - `AddProduct.tsx`: Form page for adding new product warranties
- `src/components/`
  - Contains reusable design components built with Tailwind (`Button`, `ProductCard`, `StatCard`, `Navbar`, etc.)
