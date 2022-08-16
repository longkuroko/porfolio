import { Container, Row, Col } from "react-bootstrap"
import React from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.sgv"

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Long - `}<span className="wrap">Software Engineer</span></h1>
                        <p>Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am</p>
                        <button onClick={() => console.log('connect')}>Let's connect</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}