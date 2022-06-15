import React from 'react'
import './Education.css'
import { Container } from 'react-bootstrap'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './Education.css'
export default function Education() {
  return (
    <div style={{backgroundColor: "rgb(106,196,220)"}}>
        <Container style={{width: "60%"}}>

            <VerticalTimeline>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                    date="2016 - 2020">
                    <h3 className="vertical-timeline-element-title">Bronx High School of Science</h3>
                    <h5 className="vertical-timeline-element-subtitle">Bronx, NY</h5>
                    <ul style={{listStyleType: "none"}}>
                        <li>Concentration: Mathematics and Economics</li>
                        <li>
                            <p>
                                At Bronx Science, I had yet to discover my passion for Computer Science. Alternatively,
                                I focused my studies on economics and quantitative analysis.
                            </p>
                        </li>
                    </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                    date="2020 - 2024">
                        <h3 className="vertical-timeline-element-title">Lehigh University</h3>
                        <h5 className="vertical-timeline-element-subtitle">Bethlehem, PA</h5>
                        <ul style={{listStyleType: "none"}}>
                            <li>Expected May 2024</li>
                            <li>GPA: 3.80, Dean's List</li>
                            <li>Computer Science and Business Program (CSB)</li>
                            <li>Minor in Data Science, Concentration in Finance</li>
                            <li>Involvement: </li>
                            <ul style={{listStyleType: "none"}}>
                                <li>Student Mentor, CSB Association (CSBA) </li>
                                <li>Founder & Treasurer, Lehigh PowerBuilders</li>
                                <li>Lehigh Investment Management Group</li>
                            </ul>
                        </ul>

                </VerticalTimelineElement>

            </VerticalTimeline>
        </Container>
    </div>
  )
}
