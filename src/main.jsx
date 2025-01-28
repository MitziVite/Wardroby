import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId='992625070111-nlmmt31bn93u62sqfados1pjiis0dvj0.apps.googleusercontent.com'>
    <App />
    </GoogleOAuthProvider>;
  </StrictMode>,
)
