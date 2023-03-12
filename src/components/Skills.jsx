import React from 'react'

// importing external components
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap'

//impporting styles and images
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'


const Skills = () => {
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
    <div className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>I have diverse set of skills and a proven track record of building seamless digital experiences. Proficient in all layers of development, ready to craft amazing websites and apps.</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className="item">
                                <img src={meter1} alt="React JS" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="APS.NET" />
                                <h5>ASP.NET</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Node JS" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="HTML" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="CSS" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="JavaScript" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="C#" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Next JS" />
                                <h5>Next JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="GitHub" />
                                <h5>GitHub</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Tailwind" />
                                <h5>Tailwind</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Bootstrap" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Firebase" />
                                <h5>Firebase</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img src={colorSharp} alt="gradient" className='background-image-left' />
    </div>
  )
}

export default Skills
