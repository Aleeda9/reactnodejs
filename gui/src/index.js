import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { usersApp } from './reducers';

const store = createStore(usersApp, applyMiddleware(thunkMiddleware));
store.subscribe(() => console.log('Store was updated'))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);