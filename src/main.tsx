import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

if (window.location.hash.startsWith('#/')) {
  const normalizedPath = window.location.hash.slice(1)
  window.history.replaceState(null, '', normalizedPath)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
