import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import reactjslogo from "../assets/img/reactjslogo.svg";
import springio from "../assets/img/springio.svg";
import dotnet from "../assets/img/dotnet.svg";
import expressjs from "../assets/img/expressjs.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Software Engineer</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={springio} alt="Image" />
                                    <h5>Spring</h5>
                                </div>
                                <div className="item">
                                    <img src={expressjs} alt="Image" />
                                    <h5>ExpressJs</h5>
                                </div>
                                <div className="item">
                                    <img src={reactjslogo} alt="Image" />
                                    <h5>ReactJs</h5>
                                </div>
                                <div className="item">
                                    <img src={dotnet} alt="Image" />
                                    <h5>.NET</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )
}