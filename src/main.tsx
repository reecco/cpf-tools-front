import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/sass/global.scss';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <App />
    <Footer />
  </>
)