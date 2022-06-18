import React from 'react'
import './Education.css'
import { Container } from 'react-bootstrap'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faArrowTrendUp, faChalkboardTeacher, faLaptopCode } from '@fortawesome/free-solid-svg-icons'


import './Education.css'
export default function Education() {
  return (
    <div>
        <Container style={{width: "70%", padding: "10px"}}>

            <h4 className="mb-4" style={{textAlign: "center"}}>
                Take a walk through my educational path and professional experiences. I'm eager to add to the list through
                engaging experiences in the tech consoluting and finance fields!
            </h4>

            <VerticalTimeline lineColor="#0085D1">  

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
                                    within the Django Framework. Currently I am working on a redesign of our top product, Claudius Scholar, which is a specially
                                    designed portal like Scholastica, for scholarly law journals.
                                </p>
                            </li>
                        </ul>
                </VerticalTimelineElement>

                

            </VerticalTimeline>


        </Container>
    </div>
  )
}
