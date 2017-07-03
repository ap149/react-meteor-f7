import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory, applyRouterMiddleware} from 'react-router';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import reducers from '../../store/reducers';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  amber600
} from 'material-ui/styles/colors';

import injectTapEventPlugin from 'react-tap-event-plugin';

import AppContainer from '../../ui/containers/AppContainer.js';
import EventDetailContainer from '../../ui/containers/EventDetailContainer.js';

import Home from '../../ui/views/Home';
import DatePoll from '../../ui/views/DatePoll';
import NewDatePoll from '../../ui/views/NewDatePoll';

injectTapEventPlugin();

const store = createStore(
  combineReducers({
    reducers,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store);

const muiTheme = getMuiTheme({
  appBar: {
    height: 50,
  },
  palette: {
    primary1Color: amber600,
  },  
});

Meteor.startup(() => {
  ReactDOM.render( 
    <MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={store}>
        <Router
          history={browserHistory}
        >
          <Route exact path="/" component={AppContainer} />
          <Route path="/event/:id" component={EventDetailContainer} />
        </Router>
      </Provider>
    </MuiThemeProvider>,    
    document.querySelector('.render-target')
  );
});

