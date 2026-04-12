// src/main.jsx — GANTI file lama dengan ini

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'   // ← tambahan
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>   {/* ← bungkus App dengan ini */}
      <App />
    </HelmetProvider>
  </StrictMode>,
)