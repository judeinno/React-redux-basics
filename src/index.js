import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/containers/App2';
import { Provider } from "react-redux";
import { store } from './app/store';


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, window.document.getElementById('app'))
