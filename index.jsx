import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import 'current-input';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App';

const routes = (
  <Route path="/" mapMenuTitle="Main" component={App}>
  </Route>
);

// Needed for onTouchTap
injectTapEventPlugin();

render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('app')
);

