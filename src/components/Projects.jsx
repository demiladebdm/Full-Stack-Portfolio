import React from 'react'

import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'

import ProjectCard from './ProjectCard'

// imprt external components for animation
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// imports images and styles 
import colorSharp2 from '../assets/img/color-sharp2.png'
// import projImg1 from '../assets/img/project-img1.png'
// import projImg2 from '../assets/img/project-img2.png'
// import projImg3 from '../assets/img/project-img3.png'

import proj1 from '../assets/portfolio/AmazonClone.png'
import proj2 from '../assets/portfolio/musica.png'
import proj3 from '../assets/portfolio/todo.png'
import proj4 from '../assets/portfolio/roboFriends.png'
import proj5 from '../assets/portfolio/tictactoe.png'
import proj6 from '../assets/portfolio/usestate.jpg'


const Projects = () => {
    const projects = [
        {
            title: 'Amazon Clone',
            description: 'Full stack e-commerce website',
            imageUrl: proj1,
            webLink: 'https://clone-5ed93.web.app/',
            gitHubLink: 'https://github.com/demiladebdm/amazon-clone.git'
        },
        {
            title: 'Musica',
            description: 'Music Player with react',
            imageUrl: proj2,
            webLink: '#',
            gitHubLink: '#'
        },
        {
            title: 'Todo List',
            description: 'Todo List with React',
            imageUrl: proj3,
            webLink: 'https://dof-todo.netlify.app/',
            gitHubLink: 'https://github.com/demiladebdm/React-todo/tree/main'
        },
        {
            title: 'Robo Friends',
            description: 'A web site used to generate and fetch different robots',
            imageUrl: proj4,
            webLink: 'https://daddydof-robofriends-app.netlify.app',
            gitHubLink: 'https://github.com/demiladebdm/robofriends/tree/main'
        },
        {
            title: 'Tic-Tac-Toe',
            description: 'A simple Tic-Tac-To game with react',
            imageUrl: proj5,
            webLink: 'https://dof-tic-tac-toe.netlify.app/',
            gitHubLink: 'https://github.com/demiladebdm/Tic-Tac-Toe/tree/master'
        },
        {
            title: 'useState()',
            description: 'useState Hook with react',
            imageUrl: proj6,
            webLink: '#',
            gitHubLink: '#'
        },
        // {
        //     title: 'Workout App',
        //     description: 'A full stack workout web app',
        //     imageUrl: proj7,
        //     webLink: '#',
        //     gitHubLink: 'https://github.com/demiladebdm/Full-Stack-Workout-App.git'
        // }
    ]



  return (
    <div className='project' id='project'>
      <Container>
        <Row>
            <Col>
                 <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                            <h2>Projects</h2>
                            <p>My projects feature concise descriptions that emphasize my expertise in front-end and back-end development, database design, and user experience, showcasing my ability to deliver high-quality results and collaborate effectively with teams and stakeholders.</p>
                        </div>
                    }
                </TrackVisibility>
                <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                        <Nav.Item class="nav-item">
                            <Nav.Link class="nav-link active" aria-current="page" eventKey={"first"} >Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item class="nav-item">
                            <Nav.Link class="nav-link" eventKey={"second"}>Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item class="nav-item">
                            <Nav.Link class="nav-link" eventKey={"third"}>Tab 3</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey='first'>
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                                key={index} 
                                                {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey='second'>
                            <Row className='tabTwoRow'>
                                <h2 style={{ fontSize: '24px'}}>Click on the Project Name to view the project on Web</h2><br /><br />
                                {
                                    projects.map(({ title, description, webLink }) => {
                                        return (
                                            <div className='tabTwo'>
                                                <a href={webLink}>
                                                    <Col>
                                                        <span className='headTitle'>{title}</span>
                                                    </Col>
                                                    <Col>
                                                        <span className='bodyTitle'>{description}</span>
                                                    </Col>
                                                </a>
                                            </div>
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey='third'>
                            <Row className='tabTwoRow'>
                                <h2 style={{ fontSize: '24px'}}>Click on the Project Name to view the project code on GitHub</h2><br /><br />
                                {
                                    projects.map(({ title, description, gitHubLink }) => {
                                        return (
                                            <div className='tabTwo'>
                                                <a href={gitHubLink}>
                                                    <Col>
                                                        <span className='headTitle'>{title}</span>
                                                    </Col>
                                                    <Col>
                                                        {/* <span className='bodyTitle'>{description}</span> */}
                                                    </Col>
                                                </a>
                                            </div>
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className='background-image-right' />
    </div>
  )
}

export default Projects
