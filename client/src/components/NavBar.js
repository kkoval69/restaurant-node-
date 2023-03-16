import React, {useContext, useState} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, GLAVN_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
import "../styles/navbar.css"
import "../styles/style.css"
import logo from "../assets/logo.png"
const NavBar = observer(() => {
    const {user} = useContext(Context)
    const {game} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

/*
    const [value,setValue]=useState('');

    const filteredGame = game.filter(game =>{
        return game.name.toLowerCase().includes(value.toLowerCase())
    })
*/

    return (

        <header className="header-area">
            <div className="top-header-area">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 d-flex align-items-center justify-content-between">
                            <div className="logo">
                                <a  onClick={() => history.push(GLAVN_ROUTE)}style={{cursor: 'pointer',color:'#20d8da'}}><img src={logo} width="100" alt=""/></a>

                            </div>
                            <div className="search-login-area d-flex align-items-center">
                                <div className="top-search-area">
                                    <form action="#" method="post">
                                        <input type="search" name="top-search" id="topSearch" placeholder="Введите название игры..."
                                           /* on onChange={(event) => setValue(event.target.value)}*/
                                        />
                                            <button type="submit" className="btn"><i className="bi bi-search"></i>
                                            </button>
                                    </form>
                                </div>
                                <div className="login-area">
                                    {user.isAuth ?
                                    <a onClick={() => logOut()} style={{ cursor: 'pointer'}}><span>Выйти</span>
                                        <i className="bi bi-lock"
                                           aria-hidden="true"></i></a>
                                    :
                                    <a onClick={() => history.push(LOGIN_ROUTE)} style={{ cursor: 'pointer'}}><span>Авторизация</span>
                                        <i className="bi bi-lock"
                                           aria-hidden="true"></i></a>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="egames-main-menu" id="sticker">
                <div className="classy-nav-container breakpoint-off">
                    <div className="container">
                        <nav className="classy-navbar justify-content-between" id="egamesNav">

                            <div className="classy-navbar-toggler">
                                <span className="navbarToggler"><span></span><span></span><span></span></span>
                            </div>

                            <div className="classy-menu">

                                <div className="classycloseIcon">
                                    <div className="cross-wrap"><span className="top"></span><span
                                        className="bottom"></span></div>
                                </div>

                                <div className="classynav">
                                    <ul>
                                        <li><a onClick={() => history.push(GLAVN_ROUTE)} style={{ cursor: 'pointer'}}>Главная</a></li>
                                        {user.isAuth ?
                                        <li><a onClick={() => history.push(ADMIN_ROUTE)} style={{cursor:'pointer'}}>Админ</a> </li>
                                        :
                                            <a></a>}
                                    </ul>
                                </div>
                            </div>

                            <div className="top-social-info">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Pinterest"><i
                                    className="bi bi-pinterest" aria-hidden="true"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i
                                    className="bi bi-facebook" aria-hidden="true"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i
                                    className="bi bi-twitter" aria-hidden="true"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Youtube"><i
                                    className="bi bi-youtube" aria-hidden="true"></i></a>
                                <a href="https://www.instagram.com/kkoval_69/" data-toggle="tooltip" data-placement="top" title="Instagram"><i
                                    className="bi bi-instagram" aria-hidden="true"></i></a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
});

export default NavBar;
