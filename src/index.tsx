import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import config from './config';
import store from './core/store/storeV2/store';
import { createBrowserHistory } from 'history';
import LogRocket from 'logrocket';

const rootElement = document.getElementById('root');
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });

LogRocket.init('rhumvk/service-app');

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter basename={config.basename}>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElement
)
