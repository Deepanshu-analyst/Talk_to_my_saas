import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AppProvider } from './context/AppContext';


// Get the root element
const rootElement = document.getElementById('root');
// Ensure it takes up full width
rootElement.style.width = '100%';
rootElement.style.maxWidth = '100%';
rootElement.style.padding = '0';
rootElement.style.margin = '0';

createRoot(rootElement).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
)
