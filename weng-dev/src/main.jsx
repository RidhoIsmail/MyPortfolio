  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import './index.css'
  import Navbar from './Components/Navbar.jsx'
  import App from './App.jsx'
  import Footer from './Components/Footer.jsx'
  import 'remixicon/fonts/remixicon.css'


  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <div className="container mx-auto px-4">
        <Navbar />
        <App />
        <Footer />
      </div>
    </StrictMode>,
  )
