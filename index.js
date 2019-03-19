import React from 'react';
import ReactDOM from 'react-dom';
import App from './ToDoManger';
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';

let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

