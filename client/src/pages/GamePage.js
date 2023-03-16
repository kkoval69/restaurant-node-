import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useHistory, useParams} from 'react-router-dom'
import {fetchOneGame, fetchRazrabs} from "../http/gameAPI";
import "../styles/style.css"
import log from "../assets/34.jpg"
import Carusel from "../components/Carusel";
import "../styles/hleb.css"
import {GLAVN_ROUTE} from "../utils/consts";
const GamePage = () => {
    const [game, setGame] = useState({info: []})
    const history = useHistory()
    const {id} = useParams()
    useEffect(() => {
        fetchOneGame(id).then(data => setGame(data))
    }, [])

    return (
        <div>

        <Carusel/>

        <section className="single-game-review-area  " >

            <div className="container">
                <nav aria-label="breadcrumb"  >
                    <ol className="breadcrumb"style={{backgroundColor:"transparent"}} >
                        <li className="breadcrumb-item" ><a  style={{cursor:'pointer'}} onClick={()=>history.push(GLAVN_ROUTE)}>Главная</a></li>
                        <li className="breadcrumb-item"><a style={{cursor:'pointer'}} href="">{game.name}</a></li>
                    </ol>
                </nav>

                <div className="row">
                    <div className="col-12">
                        <div className="single-game-img-slides">
                            <div id="gameSlides" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="Image d-block w-100" style={{ width:30,height:650}} src={process.env.REACT_APP_API_URL + game.img} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">

                    <div className="col-12 col-md-6">
                        <div className="single-game-review-area style-2 mt-70">
                            <div className="game-content">
                                <a href="#" className="game-title">{game.name}</a>
                                <div className="game-meta">
                                </div>
                                <p>{game.opis}</p>

                                <div className="download-rating-area">
                                    <div className="download-area">
                                        {/*<a href="#"><img src="../assets/google-play.png" alt=""/></a>*/}
                                    </div>
                                    <div className="rating-area mt-30">
                                        <h3>{game.rating}</h3>
                                        <a style={{color:'#20d8da'}}>Metascore</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-md-6">
                        <div className="egames-barfiller">

                            <div className="single-barfiller-area">
                                <Card
                                    className="d-flex flex-column align-items-center justify-content-around"
                                    style={{backgroundColor:"transparent"}}
                                >
                                    <h3>От: {game.price}$</h3>

                                </Card>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Container className="mt-3">
            <Row className="d-flex flex-column m-3">
                <h1 style={{color:'#20d8da'}}>Системные требования</h1>
                {game.info.map((info, index) =>
                    <Row key={info.id} style={{color: index % 2 ===0 ?'#0C5460':'#20d8da',background: index % 2 === 0 ? '#BBE5EB' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
            </Container>
        </section>
        </div>
    );
};

export default GamePage;
