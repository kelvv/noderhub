import React, { Component } from 'react';
import {Provider} from 'react-redux';
import App from './app.js';
import configureStore from './store/store.js'

const store = configureStore();

const Main = () =>{
    return (
        <Provider store={ store }>
            <App/>
        </Provider>
    )
}

export default Main;