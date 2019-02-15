import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import registerServiceWorker from './registerServiceWorker';
import "bootstrap/dist/css/bootstrap.css";
import 'font-awesome/css/font-awesome.min.css';
import "../src/styles/main.css";
import "../src/styles/mobile.css";
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCVXpvxCmeTMy_A-UDIxNZOzlGlWZB5xoo",
  authDomain: "aarohielegance-25.firebaseapp.com",
  databaseURL: "https://aarohielegance-25.firebaseio.com",
  projectId: "aarohielegance-25",
  storageBucket: "aarohielegance-25.appspot.com",
  messagingSenderId: "873637831290"
};
firebase.initializeApp(config);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
