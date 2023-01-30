import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../style.scss"
import { Container, Row, Col, Button } from "reactstrap"
import FeaturePage from "../components/features"
import BannerWhatsapp from '../components/banner-whatsapp'
import MyCarousel from '../components/banner-carrousel';
import BannerSubscribe from "../components/banner-subscribe"


const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const WhatsappBannerValues = {
  title: "¿Listo para probar el Chatbot y WhatsApp?",
  text: "Prueba gratis por 14 días y empieza a conseguir más clientes en menos de 5min.",

}
const IndexPage = () => (
  <Layout >
    <Container className="hero-component">
      <Row>
        <Col xs="12" lg="6"  className="order-2 order-md-1">
          <div className="hero">
            <div className="d-flex flex-column btn-container d-sm-flex d-lg-none d-xl-none">
            <h2 className="hero-title">
              <span className="principal-color">Biitbot, </span>
              a un mensaje de tu inventario.
            </h2>
            <p className="text">
            ¡Obtén información de productos e inventario en tiempo real con nuestro bot de WhatsApp!
            </p>
            </div>
            <div className="btn-container d-none d-sm-block">
            <h2 className="hero-title">
              Con <span className="principal-color">ChatBot</span>, automatizar
              el servicio al cliente{" "}
              <span className="principal-color">es muy fácil</span>
            </h2>
            <p className="text">
            ¡Obtén información de productos e inventario en tiempo real con nuestro bot de WhatsApp! Con nuestro bot fácil de usar, puedes obtener rápidamente precios, disponibilidad y detalles de productos.
            </p>
            </div>
            <div className="btn-container show-mobile d-sm-flex">
              <Button className="btn-test">¡Quiero probarlo!</Button>
              <Button className="btn-demo">Demo</Button>
            </div>
          </div>
        </Col>
        <Col xs="12" lg="6"  className="order-1 order-md-2">
          <div className="image-container">
            <StaticImage
              src="../images/bot-1.png"
              className="hero-image"
              loading="eager"
              quality={100}
              width={450}
              formats={["auto", "webp", "avif"]}
              breakpoints={[750, 1080, 1366, 1920]}
              alt="BittBot"
              placeholder="BittBot"
              backgroundColor="transparent"
            />
          </div>
            {/* <div className="btn-container">
              sss
              <Button className="btn btn-test">¡Quiero probarlo!</Button>
              <Button className="btn btn-demo">Demo</Button>
            </div> */}
        </Col>
      </Row>
    </Container>
    <MyCarousel />
    <FeaturePage/>
    <BannerSubscribe/>
    <BannerWhatsapp data={WhatsappBannerValues}/>
    
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="BittBot" />

export default IndexPage
