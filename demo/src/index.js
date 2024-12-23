// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom' // 追加

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
  <BrowserRouter> {/*BrowserRouterで囲む*/}
    <App />
  </BrowserRouter>
);