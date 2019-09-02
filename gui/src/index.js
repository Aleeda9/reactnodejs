import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { createStore } from 'redux';
import { usersApp } from './reducers';
import { Provider } from 'react-redux'

const store = createStore(usersApp);
store.subscribe(() => console.log('Store was updated'))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);