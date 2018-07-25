// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';
import 'flexboxgrid2/flexboxgrid2.css';
import { Provider } from 'react-redux';
import configurationStore from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');
const store = configurationStore();
if (!root) throw new Error('missing root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root,
);
registerServiceWorker();
