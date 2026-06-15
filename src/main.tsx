// import { StrictMode } from 'react''
// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.tsx'
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById('root')!).render(
   <HelmetProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </HelmetProvider>,
)
