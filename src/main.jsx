import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './scss/main.scss';
import { BrowserRouter } from 'react-router-dom';
import { SearchContextProvider } from './context/SearchContext';
import { SidebarContextProvider } from './context/SidebarContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <SearchContextProvider>
      <SidebarContextProvider>
      <App />
      </SidebarContextProvider>
    </SearchContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
