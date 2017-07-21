import React from 'react';
import {NavLink } from 'react-router-dom';
export default class Header extends React.Component{
    render(){
        return (
            <header>
                <div class="navbar">
                    <div class="container">
                        <ul class="nav navbar-nav">
                            <li><NavLink activeStyle={{
                                fontWeight: 'bold',
                                color: 'red',
                                backgroundColor:"#F8F8F8"
                            }} to={"/home"}>首页</NavLink></li>
                            <li><NavLink to={"/list"}>列表</NavLink></li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}