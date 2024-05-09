import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './src/App';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);

/*const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);*/
