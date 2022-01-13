// var React = require('react');
// by babble
import React, { createElement } from 'react'; 
// var ReactDom = require('react-dom');
import ReactDom from 'react-dom';

// by react
ReactDom.render(<h1> Hello :)</h1>, 
        document.getElementById("root"));

// by babble
ReactDom.render(
  React.createElement("h1",null,"Hello :)"),
  document.getElementById("root"));

// by pure javaScript
var h1 = document.createElement("h1");
h1.innerHTML = "Aditya gupta";
document.getElementById("root").appendChild(h1);
