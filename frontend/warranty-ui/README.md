# WarrantyWise Frontend

This is a modern React web application built for the Warranty Management System "WarrantyWise". It features a clean, soft SaaS dashboard design with a responsive layout.

## Technologies Used
- **React 18** (via Vite)
- **TypeScript**
- **Tailwind CSS v3**
- **React Router**
- **React Icons**

### Setup and Installation

**This project is part of a Monolithic Workspace.** 
You do not need to boot the frontend independently.

1. Open up a terminal and navigate to the **root** directory of the project:
   ```bash
   cd D:\WarrantyWise
   ```

2. Make sure you have installed both backend and frontend dependencies (see `backend/README.md` for python details):
   ```bash
   cd frontend/warranty-ui && npm install && cd ../..
   ```

3. **Start the Application**:
   Run the global script to boot both the React Frontend and Flask Backend simultaneously:
   ```bash
   npm run start
   ```

The application will start, and you can view it in your browser at [http://localhost:3000](http://localhost:3000). 
(It is also automatically broadcasted to `0.0.0.0`, meaning you can access it on your mobile device using your computer's local Wi-Fi IP address, e.g. `http://192.168.1.5:3000`)

---

### Project Structure Overview

- `src/pages/`
  - `Login.tsx`: Authentication screen
  - `Dashboard.tsx`: Main overview with warranty statistics and active/expired products grid
  - `AddProduct.tsx`: Form page for adding new product warranties
- `src/components/`
  - Contains reusable design components built with Tailwind (`Button`, `ProductCard`, `StatCard`, `Navbar`, etc.)
