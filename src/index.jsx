import React from 'react';
import ReactDOM from 'react-dom';
import Routers from "./router/Routers";
const bootstrapcss = require('./static/css/bootstrap.min.css');
ReactDOM.render(
    <Routers/>,
    document.getElementById('root')
)