import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateRazrab from "../components/modals/CreateRazrab";
import CreateGame from "../components/modals/CreateGame";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [razrabVisible, setRazrabVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [gameVisible, setGameVisible] = useState(false)


    return (
        <Container className="d-flex flex-column p-5">
            <Button
                variant={'outline-info'}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить жанр
            </Button>
            <Button
                variant={'outline-info'}
                className="mt-4 p-2"
                onClick={() => setRazrabVisible(true)}
            >
                Добавить компанию разработчиков
            </Button>
            <Button
                variant={'outline-info'}
                className="mt-4 p-2"
                onClick={() => setGameVisible(true)}
            >
                Добавить игру
            </Button>
            <CreateRazrab show={razrabVisible} onHide={() => setRazrabVisible(false)}/>
            <CreateGame show={gameVisible} onHide={() => setGameVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;
