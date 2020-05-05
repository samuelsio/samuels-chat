import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './components/login/login';
import SignupComponent from './components/signup/signup';
import DashboardComponent from './components/dashboard/dashboard';

const firebase = require("firebase");
require ("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyB9Q0Kt9AT16kz9POFkone_rQ2JfuGFW_A",
    authDomain: "samuelsio-chat.firebaseapp.com",
    databaseURL: "https://samuelsio-chat.firebaseio.com",
    projectId: "samuelsio-chat",
    storageBucket: "samuelsio-chat.appspot.com",
    messagingSenderId: "961222824860",
    appId: "1:961222824860:web:005db6ab08eae4048eee59",
    measurementId: "G-BJ6K1EPKQ5"
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
