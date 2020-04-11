import React from 'react';
import ReactDOM from 'react-dom';
import {StartuserTokenAction} from "./actions/userTokenAction"
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import configStore from "./store/configStore"

const store=configStore()

if(localStorage.getItem('token')){
  store.dispatch(StartuserTokenAction())
}

const val=(<Provider store={store}>
  <App />
</Provider>
)
ReactDOM.render(
  val,
  document.getElementById('root')
)