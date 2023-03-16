import React, {useContext, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, GLAVN_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import "../styles/log.css";
import bak from "../assets/Сonnor_wallpaper_rain.mp4"
import Image from "react-bootstrap/Image";
const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(GLAVN_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
<div class="intro">

    <div class="intro_media">

        <video class="intro_media_video" src={bak} autoPlay muted loop></video>
    </div>
    <div class="intro_content">
        <nav aria-label="breadcrumb"  >
            <ol className="breadcrumb"style={{backgroundColor:"transparent"}} >
                <li className="breadcrumb-item" ><a  style={{cursor:'pointer'}} onClick={()=>history.push(GLAVN_ROUTE)}>Главная</a></li>
                <li className="breadcrumb-item"><a style={{cursor:'pointer'}} href="">Авторизация</a></li>
            </ol>
        </nav>
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 74}}>
            <Card  style={{width: 700, background:'transparent'}} className="p-3" >

                <div class="container"  class="mucard">
                    <div class="row" >
                        <div class="col-md-2"></div>

                        <div class="col-md-8" >
                            <Form class="row"
                            >
                                <a
                                    class="col-md-6">
                                        <h2 class="hcw" className="text-center">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                                </a>
                                        <Form.Control class="form-control"
                                            style={{color: '#1e90ff'}}
                                            className="mt-3"
                                            placeholder="Введите ваш email..."
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                        <Form.Control
                                            style={{color: '#1e90ff'}}
                                            className="mt-3"
                                            placeholder="Введите ваш пароль..."
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            type="password"
                                        />
                                        <Button className="col-sm-12 col-md-12 col-lg-12"
                                            variant={"outline-primary"}
                                            onClick={click}
                                        >
                                            {isLogin ? 'Войти' : 'Регистрация'}
                                        </Button>
                                        <Row className="d-flex ml-3 m-3">

                                            {isLogin ?
                                                <div style={{color: "white"}}>
                                                    Нет аккаунта? <NavLink style={{color: "#1e90ff"}}  to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                                                </div>
                                                :
                                                <div style={{color: "white"}}>
                                                    Есть аккаунт? <NavLink style={{color: "#1e90ff"}} to={LOGIN_ROUTE}>Войдите!</NavLink>
                                                </div>
                                            }
                                        </Row>
                                        </Form>
                                    </div>
                                <div class="col-md-6"></div>
                            </div>
                        </div>
                        <div class="col-md-2"></div>
            </Card>
        </Container>
    </div>
</div>
    );
});

export default Auth;
