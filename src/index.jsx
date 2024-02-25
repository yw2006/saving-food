import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Navbar from "../src/commn/Navabar.jsx";
import Navabar2 from "../src/commn/navbar.jsx";
import Footer from "../src/commn/Footer.jsx";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
const reactQuery = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Navabar2 />
      <QueryClientProvider client={reactQuery}>
        <App />
      </QueryClientProvider>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
