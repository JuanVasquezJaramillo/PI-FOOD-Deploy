import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk'


const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta linea es para conectar con la extensión del navegador => REDUX D

export const store = createStore(
    reducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))); // Esta linea nos permite hacer peticiones a un servidor

export default store;