import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import {createGame, fetchRazrabs, fetchGames, fetchTypes} from "../../http/gameAPI";
import {observer} from "mobx-react-lite";

const CreateGame = observer(({show, onHide}) => {
    const {game} = useContext(Context)
    const [name, setName] = useState('')
    const [rating, setRating] = useState(0)
    const [price, setPrice] = useState(0)
    const [opis, setOpis] = useState('')
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => game.setTypes(data))
        fetchRazrabs().then(data => game.setRazrabs(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addGame = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('rating', `${rating}`)
        formData.append('opis',opis)
        formData.append('img', file)
        formData.append('razrabId', game.selectedRazrab.id)
        formData.append('typeId', game.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createGame(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить игру
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{game.selectedType.name || "Выберите жанр"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {game.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => game.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{game.selectedRazrab.name || "Выберите компанию"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {game.razrabs.map(razrab =>
                                <Dropdown.Item
                                    onClick={() => game.setSelectedRazrab(razrab)}
                                    key={razrab.id}
                                >
                                    {razrab.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название игры"
                    />
                    <a>Цена</a>
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите стоимость игры"
                        type="number"
                    />
                    <textarea
                        value={opis}
                        onChange={e => setOpis(e.target.value)}
                        placeholder="Введите описание игры"
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                    <a>Оценка(Metacritic)</a>
                    <Form.Control
                        value={rating}
                        onChange={e => setRating(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите оценку игры"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Введите описание свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addGame}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateGame;
