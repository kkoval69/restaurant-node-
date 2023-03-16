import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import RazrabBar from "../components/RazrabBar";
import GameList from "../components/GameList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchRazrabs, fetchGames, fetchTypes} from "../http/gameAPI";
import Pages from "../components/Pages";
import Carusel from "../components/Carusel";
import {BrowserRouter} from "react-router-dom";

const Glavn = observer(() => {
    const {game} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => game.setTypes(data))
        fetchRazrabs().then(data => game.setRazrabs(data))
        fetchGames(null, null, 1, 3).then(data => {
            game.setGames(data.rows)
            game.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchGames(game.selectedType.id, game.selectedRazrab.id, game.page, 3).then(data => {
            game.setGames(data.rows)
            game.setTotalCount(data.count)
        })
    }, [game.page, game.selectedType, game.selectedRazrab,])

    return (
        <div>
            <Carusel/>
            <Container>
            <Row className="mt-3">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <RazrabBar/>
                    <GameList/>
                    <Pages/>
                </Col>
            </Row>
            </Container>
        </div>
    );
});

export default Glavn;
