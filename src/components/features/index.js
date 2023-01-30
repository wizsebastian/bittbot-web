import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../../components/seo"
import "../../style.scss"
import "./styles.scss"
import { Container, Row, Col, Button } from "reactstrap"

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const feature = [
    { text: 'Característica NO.1 mi amor luis' },
    { text: 'Característica NO.1 mi amor luis' },
    { text: 'Característica NO.1 mi amor luis' },
    { text: 'Característica NO.1 mi amor luis' },
    { text: 'Característica NO.1 mi amor luis' },
    { text: 'Característica NO.1 mi amor luis' },
]
const FeaturePage = () => (
    <Container className="hero">
        <Row>
            <Col xs="12" lg="6" >
                <div >
                    <div className="d-flex flex-column btn-container d-sm-flex d-lg-none d-xl-none">
                        <h2 className="hero-title">
                            Conoce las <span className="principal-color">características
                            </span>
                        </h2>
                        <p className="text">
                            Cree sus primeros chatbots de IA con plantillas listas para usar. Personalícelos para que se ajusten a las necesidades de su negocio y haga que sus chatbots cobren vida en cuestión de minutos.
                        </p>
                    </div>
                    <div className="btn-container d-none d-sm-block">
                        <h2 className="hero-title">
                            Conoce las <span className="principal-color"> características
                            </span>

                        </h2>
                        <p className="text">
                            Cree sus primeros chatbots de IA con plantillas listas para usar. Personalícelos para que se ajusten a las necesidades de su negocio y haga que sus chatbots cobren vida en cuestión de minutos.            </p>
                    </div>

                </div>
            </Col>
            <Col xs="12" lg="6" >
                <div className="image-container">
                    <StaticImage src="../../images/bittbot.png" alt="BittBot" width={700} />
                </div>
            </Col>
        </Row>
        <Row>

            {feature.map(item =>
            (<Col lg="2">
                <div className="mini-card-gray">
                    <Col lg="12" xs="3">

                        <div className="cicle-container">
                            <div className="circle-purple"></div>
                        </div>
                    </Col>
                    <Col lg="12" xs="9">

                        <h4>{item.text}</h4>
                        <a href="/">Leer mas</a>
                    </Col>
                    {/* <Col lg="12" xs="3">

                        </Col> */}
                </div>
            </Col>)
            )}
        </Row>

    </Container>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="BittBot" />

export default FeaturePage
