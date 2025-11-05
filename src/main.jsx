import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter } from 'react-router-dom'
import {CartProvider} from "./components/CartContext.jsx"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CartProvider>
    < BrowserRouter basename='/ecommerce-react/'>
    <App/>
    </BrowserRouter>
    </CartProvider>
  </StrictMode>,
)
