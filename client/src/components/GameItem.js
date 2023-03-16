import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useHistory} from "react-router-dom"
import {GAME_ROUTE} from "../utils/consts";
import "../styles/auth.css"
import aca from "../assets/caru1.jpg"
import "../styles/style.css"
const GameItem = ({game}) => {
    const history = useHistory()
    return (
        <section className="game-review-area section-padding-100-60">
            <div className="container">
                <div className="row">
                    <div className="col-12">


                        <div className="single-game-review-area d-flex flex-wrap mb-30">
                            <div className="game-thumbnail">
                                <Image className = "Image" style={{width: 500, height: 350}} src={process.env.REACT_APP_API_URL + game.img}/>
                            </div>
                            <div className="game-content">
                                <a
                                    onClick={() => history.push(GAME_ROUTE + '/' + game.id)}
                                    style={{width: 150, cursor: 'pointer'}}
                                    className="game-title"
                                >
                                    {game.name}
                                </a>
                                <div className="game-meta">
                                </div>
                                <p>{game.opis}</p>

                                <div className="download-rating-area d-flex align-items-center justify-content-between">
                                    <div className="download-area">
                                        <a href="#"><img src="img/core-img/app-store.png" alt=""/></a>
                                        <a href="#"><img src="img/core-img/google-play.png" alt=""/></a>
                                    </div>
                                    <div className="rating-area text-center">
                                        <h3>{game.rating}</h3>
                                        <a style={{color:'#20d8da'}}>Metascore</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default GameItem;
