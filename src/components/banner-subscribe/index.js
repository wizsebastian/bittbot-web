import * as React from 'react';
import { Container, Row, Col, Input } from "reactstrap"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/react-fontawesome';
import './style.scss'

const BannerSubscribe = () => {
    return (<div className='banner-subscribe'>
        <Container>
            <Row>
                    <div className='text-center title-container'>
                        <h2>Convierte las visitas en ventas y
                           satisfacción del cliente para tu negocio</h2>
                    </div>
                <Col xs="12" lg="6" >
                    <StaticImage src="../../images/chat.png" alt="BittBot" width={700} />
                </Col>
                <Col xs="12" lg="6" >
                    <div className='form'>
                        <h3>Completa tus datos</h3>
                        <Input
                            type="text"
                            placeholder="Nombre"
                            prepend={<FontAwesomeIcon icon={faEnvelope} />}
                        />
                        <Input
                            type="email"
                            placeholder="Email"
                            prepend={<FontAwesomeIcon icon={faEnvelope} />}
                        />
                        <Input
                            type="password"
                            placeholder="Contraseña"
                            prepend={<FontAwesomeIcon icon={faEnvelope} />}
                        />
                        <Input
                            type="password"
                            placeholder="Repita contraseña"
                            prepend={<FontAwesomeIcon icon={faEnvelope} />}
                        />

                        <button>Enviar</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>)
}

export default BannerSubscribe;