import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Container, Row, Col } from "reactstrap"
import { StaticImage } from "gatsby-plugin-image"
import MobileImg from "../../images/mobile_2.png"
import MobileImg_2 from "../../images/mobile.png"

import "./styles.scss"

function MyCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='banner-carrousel'>
            <Container >
                <Row>
                    <Col xs="12" lg="12" >
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <div className="item">
                                <Row>
                                    <Col lg="6">
                                        {/* <StaticImage src="../../images/mobile.png" placeholder="BittBot"
                                            backgroundColor="transparent" width={700} loading="eager"
                                            alt="BittBot"
                                            quality={100} /> */}
                                            <div className='container-img-carrousel'>
                                            <img src={MobileImg_2} alt="mobile" />
                                            </div>
                                        {/* <div className="container-text-carrousel">
                                        </div> */}
                                    </Col>
                                    <Col lg="6">
                                        <div className="container-text-carrousel">
                                            <div className='container-icon-image'>
                                                <StaticImage src="../../images/icon.png" placeholder="BittBot"
                                                    alt="BittBot"
                                                    backgroundColor="transparent" width={328} loading="eager"
                                                    quality={100} />
                                            </div>
                                            <h2 className='title'>Solución al sector Inmobiliario</h2>
                                            <p className='text'>Ayudar a que los agentes puedan solicitar el inventario de un proyecto y recibirlo de una vez. </p>
                                            <button>¡LO QUIERO!</button>
                                        </div>
                                    </Col>
                                </Row>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="item">
                                <Row>
                                    <Col lg="6">
                                        <div className='container-img-carrousel'>
                                            {/* <StaticImage src="../../images/mobile_2.png" placeholder="BittBot"
                                                alt="BittBot"
                                                backgroundColor="transparent" width={700} loading="eager"
                                                quality={100} /> */}
                                                  <img src={MobileImg} alt="mobile" />
                                        </div>

                                        {/* <div className="container-text-carrousel">
                                        </div> */}
                                    </Col>
                                    <Col lg="6">
                                        <div className="container-text-carrousel">
                                            <div className='container-icon-image'>
                                                <StaticImage src="../../images/icon_2.png" placeholder="BittBot"
                                                    backgroundColor="transparent" width={328} loading="eager"
                                                    alt="BittBot"
                                                    quality={100} />
                                            </div>
                                            <h2 className='title'>Solución al sector Almacenaje</h2>
                                            <p className='text'>Ayudar a que los agentes puedan solicitar el inventario de un proyecto y recibirlo de una vez. </p>
                                            <button>¡LO QUIERO!</button>
                                        </div>
                                    </Col>

                                </Row>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MyCarousel;