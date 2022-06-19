import React from 'react'
import './Background.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faArrowTrendUp, faChalkboardTeacher, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

export default function Background() {
  return (
    <div style={{paddingBottom: "100px"}}>
        <Container style={{width: "70%", padding: "10px"}}>

            <h3 className="my-4" style={{textAlign: "center"}} id="education">
                Work Experience & Educational Background
            </h3>

            <VerticalTimeline lineColor="#0085D1" className="mb-4">  

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                    icon={<FontAwesomeIcon icon={faSchool}/>}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    date="Aug. 2020 - Exp. May 2024">
                        <h3 className="vertical-timeline-element-title">Lehigh University</h3>
                        <h5 className="vertical-timeline-element-subtitle">Bethlehem, PA</h5>
                        <ul style={{listStyleType: "none"}}>
                            <li>
                                <p>At Lehigh, I'm involved with a few student organizations, namely the Computer Science and Business Association (CSBA) as 
                                    mentor to first-year students. As a mentor, I help rising freshman with their transition to college, in addition to getting them
                                    on the right path with course registration and other academic issues.
                                </p>
                            </li>
                        </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                    icon={<FontAwesomeIcon icon={faArrowTrendUp}/>}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    id="experience"
                    date="Oct. 2020 - Jan. 2021">
                        <h3 className="vertical-timeline-element-title">Investment Research Analyst</h3>
                        <h5 className="vertical-timeline-element-subtitle">Remote Mentorship</h5>
                        <ul style={{listStyleType: "none"}}>
                            <li>
                                <p>
                                    As an Investment Research Analyst, I built up a foundational knowledge of technical valuation skills through
                                    valuating sample companies in the Software Industry. I developed familiarity with Discounted Cash Flow modeling,
                                    and financial statements analysis through market comps.
                                </p>
                            </li>
                        </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                    icon={<FontAwesomeIcon icon={faChalkboardTeacher}/>}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    date="Jan. 2022 - May. 2022">
                        <h3 className="vertical-timeline-element-title">TA & Grader</h3>
                        <h5 className="vertical-timeline-element-subtitle">CS @ Lehigh University</h5>
                        <ul style={{listStyleType: "none"}}>
                            <li>
                                <p>
                                    Worked as a teacher's assistant for CSE 007: Introduction to Programming. I was responsible for grading and 
                                    tutoring over 150 students on fundamental programming concepts from data types and methods to 
                                    object-oriented programming.
                                </p>
                            </li>
                        </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                    icon={<FontAwesomeIcon icon={faLaptopCode}/>}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    date="Aug. 2021 - Present">
                        <h3 className="vertical-timeline-element-title">Software Development</h3>
                        <h5 className="vertical-timeline-element-subtitle">Claudius AI</h5>
                        <ul style={{listStyleType: "none"}}>
                            <li>
                                <p>
                                    At Claudius, I'm working on the development team as a Software Development Intern, covering our full stack technologies
                                    within the Django Framework. Currently I am working on a redesign of, Claudius Scholar, a journal submission portal specifically
                                    designed with input from various scholarly law journals.
                                </p>
                            </li>
                        </ul>
                </VerticalTimelineElement>
            </VerticalTimeline>

            <h3 className="my-5" style={{textAlign: "center"}} id="skills">
                Skills & Proficiencies
            </h3>

            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://cdn.vox-cdn.com/thumbor/_AobZZDt_RVStktVR7mUZpBkovc=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1087137/java_logo_640.jpg" />
                        <Card.Body>
                            <Card.Title>Back-End</Card.Title>
                            <Card.Text>
                                <ul style={{listStyle: "none"}}>
                                    <li>Java</li>
                                    <li>Python</li>
                                    <li>SQL</li>
                                </ul>
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
                        <Card.Body>
                            <Card.Title>Front-End</Card.Title>
                            <Card.Text>
                                <ul style={{listStyle: "none"}}>
                                    <li>HTML5</li>
                                    <li>CSS</li>
                                    <li>Javascript (React.js)</li>
                                </ul>
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Oracle_SQL_Developer_logo.svg/1200px-Oracle_SQL_Developer_logo.svg.png" />
                        <Card.Body>
                            <Card.Title>Data Analysis</Card.Title>
                            <Card.Text>
                                <ul style={{listStyle: "none"}}>
                                        <li>Pandas (Python)</li>
                                        <li>R</li>
                                        <li>SQL</li>
                                </ul>
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </Container>
    </div>
  )
}
