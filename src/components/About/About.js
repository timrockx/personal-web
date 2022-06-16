import React from 'react'
import './About.css'
import { Container, Form } from 'react-bootstrap'

export default function About() {
  return (
    <div className="intro">
        <Container style={{width: "60%"}}>
        
            <div className="question messages">
                <div className="message last">
                    <h3>Who am I?</h3>
                </div>
            </div>

            <div className="answer messages">
                <div className="message last">
                    <p className="text">
                        My name is Tim, and I'm an aspiring Software Developer with a huge passion
                        in tech and finance. I'm currently in the Computer Science & Business (CSB) program
                        at Lehigh University, with plans to graduate in May 2024.
                    </p>
                </div>
            </div>

            <div className="question messages">
                <div className="message last">
                    <h3>
                        What do I do?
                    </h3>
                </div>
            </div>

            <div className="answer messages">
                <div className="message last">
                    <p className="text">
                        I'm currently working as a Software Developer at a Legal AI startup 
                        based out of Princeton University. Looking ahead, I'm planning to pursue a 
                        career in tech consulting, with an end goal of VC and Product Management.
                    </p>
                </div>
            </div>

            <div className="question messages">
                <div className="message last">
                    <Form>
                        <Form.Group controlId="formAskQuestions">
                            <Form.Control 
                                type="search"
                                placeholder="Ask more here!"
                                className="question-box"
                                autoComplete="off">
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </div>
            </div>

            <div className="answer messages">
                <div className="message last">
                    <h4>My response goes here</h4>
                </div>
            </div>
        </Container>

    </div>
  )
}
