import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { AppContainer } from 'react-hot-loader';
import Routes from './routes';

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
import "styles/_style.sass"  // Css-module styles


import store from "./stores/Root";

const routes = require('./routes');

const renderApp = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component/>
      </AppContainer>
    </Provider>,
    document.getElementById('app')
  );
};

renderApp(Routes);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes', () => {
    renderApp(routes.default);
  })
}