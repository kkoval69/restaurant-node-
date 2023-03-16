import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import car1 from '../assets/rabstol_net_star_wars_08_2560x1440.jpg'
import car2 from '../assets/antem.jpg'
import car3 from '../assets/gon.jpg'

const Carusel = () => {
    return (
        <Carousel variant="dark">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={car1}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={car2}
            alt="Second slide"
            />

        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={car3}
            alt="Third slide"
            />
        </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={car3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
            );
        };

export default Carusel;