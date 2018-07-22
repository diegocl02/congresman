/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from 'redux';
import { reducer } from './redux/reducers';
import * as Actions from './redux/actions';
import { createEmptyAppState } from './redux/createEmptyAppState';
import { bindObservableAsProps } from './redux/bind';
import { Observable } from 'rxjs';

const store = createStore(
  reducer,
  createEmptyAppState()
);

function appStateToProps(state) {
  return {
    setProjectData: (data) => store.dispatch(Actions.setProjectData(data)),
    ...state
  }
}

const PreparedApp = bindObservableAsProps(
  // $FlowFixMe: Teach flow about Symbol.observable
  Observable.from(store)
    .distinctUntilChanged()
    .map(state => appStateToProps(state)),
  App,
)

ReactDOM.render(<PreparedApp />, document.getElementById('root'));
registerServiceWorker();
