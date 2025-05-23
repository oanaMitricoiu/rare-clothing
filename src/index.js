import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from './App';
import { UserProvider } from "./contexts/user";
import {CategoriesProvider } from "./contexts/categories";
import { CartProvider } from "./contexts/cart";
import './index.scss';

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
    <CategoriesProvider>
    <CartProvider>
      <App />
    </CartProvider>
    </CategoriesProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// reportWebVitals();
