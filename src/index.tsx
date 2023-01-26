import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType, state, subscribe} from "./redux/state";

export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);


subscribe(rerenderEntireTree);