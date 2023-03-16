import React from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/logo.png"
import "../styles/style.css"
import "../styles/navbar.css"
const Footer = () => {
    return (
        <footer className="footer-area">

            <div className="main-footer-area section-padding-100-0">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="single-footer-widget mb-70">
                                <div className="widget-title">
                                    <a href="index.html"><img style={{width:300, height:"auto"}} src={logo} alt=""/></a>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-sm-6 col-lg-5">
                            <div className="single-footer-widget mb-70">
                                <div className="widget-title">
                                    <h4>Мир Видеоигр</h4>
                                </div>
                                <div className="widget-content">
                                    <nav>
                                        <ul>
                                            <li><a >Свидетельство о регистрации СМИ: Эл № ФС77-81598 от 03 ноября 2021 г. Выдано Федеральной службой по надзору в сфере связи, информационных технологий и массовых коммуникаций</a>

                                            <a>Главный редактор: Коваль И.А.</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>





                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="single-footer-widget mb-70">
                                <div className="widget-title">
                                    <h4>Контакты</h4>
                                </div>
                                <div className="widget-content">
                                    <nav>
                                        <ul>
                                            <li><a href="#" data-toggle="tooltip" data-placement="top" title="Телефон"><i
                                                className="bi bi-phone " aria-hidden="true"></i>+375(33)904-70-49</a></li>
                                            <li><a href="#" data-toggle="tooltip" data-placement="top" title="Местонахождение"><i
                                                className="bi bi-geo " aria-hidden="true"></i>  г.Витебск, ул.Гагарина 41</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="copywrite-content">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 col-sm-5">


                        </div>
                        <div className="col-12 col-sm-7">

                            <div className="footer-nav">
                                <ul>
                                    <li><a href="index.html">Главная</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;