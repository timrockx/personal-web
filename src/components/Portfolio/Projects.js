import React from 'react'
import './Projects.css'
import { Container, Button } from 'react-bootstrap'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faDatabase, faGavel } from '@fortawesome/free-solid-svg-icons'

export default function Projects() {
  return (
    <div>
        <Container>

            <h2 className="projects-header" id="projects">
                Projects & Previous Developments
            </h2>

            <VerticalTimeline lineColor="#0085D1" className="mb-4">

            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                    icon={<FontAwesomeIcon icon={faLayerGroup}/>}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    date="Jun. 2021 - Jan. 2022">
                        <h3 className="vertical-timeline-element-title">Chase that Pump</h3>
                        <h5 className="vertical-timeline-element-subtitle">Full-Stack Django Application</h5>
                        <ul style={{listStyleType: "none"}}>
                            <li>
                                <p>
                                    Fully developed and deployed a full-stack Django application. The application is a database of gym workouts
                                    for enthusiasts to search and learn from, with worksouts and descriptions gathered from various credible sources.
                                </p>
                                
                                <div className="project-button">
                                    <Button target="_blank" variant="light" href="http://www.chasethatpump.com/">Live Site</Button>
                                    <Button target="_blank" variant="light" href="https://github.com/timrockx/chasethatpump-django/tree/master">Source Code</Button>
                                </div>
                                

                            </li>
                        </ul>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                    icon={<FontAwesomeIcon icon={faDatabase}/>}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    id="experience"
                    date="Jan. 2022 - May. 2022">
                        <h3 className="vertical-timeline-element-title">NUMA Enterprises</h3>
                        <h5 className="vertical-timeline-element-subtitle">JDBC/SQL Linux Application</h5>
                        <ul style={{listStyleType: "none"}}>
                            <li>
                                <p>
                                    Developed a command-line based Linux Application that utilized the JDBC API to communicate with an 
                                    OracleSQL Database and execute queries and updates to return useful information to the user. The application
                                    runs on a fully-made relational database, designed with specific paramters in mind.
                                </p>

                                <div className="project-button">
                                    <Button target="_blank" variant="light" href="https://github.com/timrockx/NUMA">Source Code</Button>
                                </div>

                            </li>
                        </ul>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                    icon={<FontAwesomeIcon icon={faGavel}/>}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    id="experience"
                    date="Mar. 2020 - Present">
                        <h3 className="vertical-timeline-element-title">Claudius Scholar</h3>
                        <h5 className="vertical-timeline-element-subtitle">Commercial Django Application</h5>
                        <ul style={{listStyleType: "none"}}>
                            <li>
                                <p>
                                    Collaborated on the Dev team to deliver a Django application built primarily with Bootstrap. The application 
                                    is a fully-fledged commercial application that allows users to create accounts, set payment methods, and 
                                    communicates submissions between the app's two portals.
                                </p>

                                <div className="project-button">
                                    <Button target="_blank" variant="light" href="https://scholar.claudius.ai/">Visit the Site</Button>
                                </div>
                            </li>
                        </ul>
            </VerticalTimelineElement>

            


            </VerticalTimeline>




        </Container>
    </div>
  )
}
