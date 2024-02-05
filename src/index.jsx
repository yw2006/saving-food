import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { QueryClient, QueryClientProvider,  } from '@tanstack/react-query'
const reactQuery = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={reactQuery}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
