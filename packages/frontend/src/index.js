import React from 'react';
import ReactDOM from 'react-dom';

// Custom Components
import App from './App';

// Redux
import store from './Store/store';
import { Provider } from 'react-redux';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)