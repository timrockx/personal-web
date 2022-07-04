import { useState } from 'react'
import './Background.css'
import { Container, Form, Button, Modal } from 'react-bootstrap'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faArrowTrendUp, faChalkboardTeacher, faLaptopCode, faMessage } from '@fortawesome/free-solid-svg-icons'
import SkillBar from 'react-skillbars'
import Projects from '../Portfolio/Projects'
import emailjs from '@emailjs/browser'

// array of skills with proficiency levels
const skills = [
    {type:'Java', level: 85},
    {type:'Python', level: 80},
    {type:'HTML', level: 65},
    {type:'SQL', level: 60},
    {type:'CSS', level: 60},
    {type:'JavaScript', level: 55},
    {type:'R', level: 55},
]

// controls colors of skill bars
const colors = {
    bar: 'rgb(32, 148, 250)',
    title: {
        text:'rgb(58, 58, 60)',
        background: '#ffffff'
    }
}

export default function Background() {

    // modal form for feedback/connecting
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'Timothy Lee',
        send_message: '',
        reply_to: '',
      })

      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.id]: e.target.value })
      }

      const onSubmit = (e) => {
        e.preventDefault();
        
        emailjs.send(
        'service_19mj5qd',
        'template_ir24x1b',
        toSend,
        'x3xRnupfgldvy_pnL'
        )
        .then((response) => {
            setToSend({
                from_name: '',
                to_name: 'Timothy Lee',
                send_message: '',
                reply_to: '',
             })
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });


    
        handleClose();
      };

  return (
    <div style={{paddingBottom: "100px"}}>
        <Container style={{width: "70%", padding: "10px"}}>

            <h2 className="my-4" style={{textAlign: "center"}} id="education">
                Work Experience & Educational Background
            </h2>

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

            <h2 className="skills-header" id="skills">
                Skills & Languages
            </h2>

            <Container style={{width: "95%", paddingBottom: "50px"}}>

                <h3 className="mt-4" style={{marginBottom:"40px"}}>
                    Programming ToolKit
                </h3>

                <Container style={{width: "85%"}}>
                    <SkillBar skills={skills} colors={colors}/>
                </Container>
                
                <p className="skills-caption">
                    My programming proficiencies span a full stack of software development with
                    specific experience in the Django Framework. I have experience building native 
                    Linux applications that interact with SQL Databases, as well as writing scripts in 
                    R and Python to analyze medium-scale data.
                </p>

                <div className="skills-cards">

                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front">
                                <figure>
                                    <img 
                                        src= "https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg"
                                        alt="ReactJS" 
                                    />
                                </figure>
                            </div>
                            <div className="card-back">
                                <p>I've been working with React for just 2 months yet, but hey - This website was built with React!</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front">
                                <figure>
                                    <img 
                                        src= "https://verbose-equals-true.gitlab.io/django-postgres-vue-gitlab-ecs/django.jpg"
                                        alt="Django" 
                                    />
                                </figure>
                            </div>
                            <div className="card-back">
                                <p>Full stack development experience within Django for over 1 year.</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front">
                                <figure>
                                    <img 
                                        src= "https://download.logo.wine/logo/Oracle_SQL_Developer/Oracle_SQL_Developer-Logo.wine.png"
                                        alt="SQL" 
                                    />
                                </figure>
                            </div>
                            <div className="card-back">
                                <p>Experience writing complex subqueries and designing relational databases with stored functions.</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front">
                                <figure>
                                    <img 
                                        src= "https://download.logo.wine/logo/R_(programming_language)/R_(programming_language)-Logo.wine.png"
                                        alt="R" 
                                    />
                                </figure>
                            </div>
                            <div className="card-back">
                                <p>Experience with analyzing data through computing Monte Carlo estimates and Bootstrap Sampling.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </Container>

            {/* projects component (vertical timeline) */}
            <Container>
                <Projects />
            </Container>

            <div className="connect">
                <Button className="connect-btn" onClick={handleShow}>
                    <FontAwesomeIcon icon={faMessage}/>
                </Button>
            </div>
            

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Connect with Me!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3" controlId="from_name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={1}
                                placeholder="First Last"
                                className="form-box"
                                onChange={handleChange}
                                defaultValue={toSend.from_name}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="reply_to">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                className="form-box"
                                defaultValue={toSend.reply_to}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="send_message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control 
                                as="textarea"
                                rows={3} 
                                placeholder="Reach out to me about anything!"
                                className="form-box"
                                defaultValue={toSend.send_message}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                    <Button variant="primary" onClick={e => onSubmit(e)} type="submit" value="Submit">
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>


        </Container>
    </div>
  )
}
