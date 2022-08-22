import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import reactjslogo from "../assets/img/reactjslogo.svg";
import springio from "../assets/img/springio.svg";
import dotnet from "../assets/img/dotnet.svg";
import expressjs from "../assets/img/expressjs.svg";
import java from "../assets/img/java.svg";
import javascript from "../assets/img/javascript.svg";
import mysql from "../assets/img/mysql.svg";
import postgresql from "../assets/img/postgresql.svg";
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
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Software Engineer</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={springio} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={java} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={expressjs} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={reactjslogo} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={dotnet} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={mysql} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={postgresql} alt="Image" />
                        
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )
}