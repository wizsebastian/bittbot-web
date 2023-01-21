import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../style.scss"
import Header from "../components/header"
import { Container, Row, Col, Button } from "reactstrap"
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout className="hero-component">
    <Container>
      <Row>
        <Col xs="12" lg="6" order={{ sm: "last", md: "first" , lg: "first", lx:"first"}}>
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
            <div className="btn-container d-none d-sm-flex"  order={{ sm: "first", md: "last" , lg: "last", lx:"last"}}>
              <Button className="btn-test">¡Quiero probarlo!</Button>
              <Button className="btn-demo">Demo</Button>
            </div>
          </div>
        </Col>
        <Col xs="12" lg="6">
          <div className="image-container">
            <StaticImage
              src="../images/bot-1.png"
              className="hero-image"
              loading="eager"
              quality={100}
              width={600}
              formats={["auto", "webp", "avif"]}
              breakpoints={[750, 1080, 1366, 1920]}
              alt="BittBot"
              placeholder="BittBot"
              backgroundColor="transparent"
            />
          </div>
            <div className="d-flex flex-column btn-container d-sm-flex d-lg-none d-xl-none">
              <Button className="btn btn-test">¡Quiero probarlo!</Button>
              <Button className="btn btn-demo">Demo</Button>
            </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="BittBot" />

export default IndexPage
