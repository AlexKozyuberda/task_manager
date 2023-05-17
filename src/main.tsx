// Core
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// Components
import { App } from './App';

// Instruments
import store from './lib/redux/init/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
