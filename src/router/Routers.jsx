import React from 'react';
import { BrowserRouter, HashRouter,Route ,Link ,Redirect} from 'react-router-dom'
import List from '../pages/List';
import Home from '../pages/Home';
import Header from "../Component/Header";
export default class Routers extends React.Component{
    render(){
        return (
            <HashRouter>
                <div className="container">
                    <Header/>
                    <hr/>
                    <Route exact path={"/list"} component={List}/>
                    <Route path={"/home"} component={Home}/>
                </div>
            </HashRouter>
        )
    }
}
