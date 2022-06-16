import { useState, useEffect } from 'react'
import axios from 'axios'
import './About.css'
import { Container, Form } from 'react-bootstrap'

export default function About() {
    
    // questions (all questions), filtered questions and search keyword
    const [questions, setQuestions] = useState([]);
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [searchKey, setSearchKey] = useState('')

    // fetch questions JSON and set all questions
    useEffect(() => {
        axios
        .get('questions.json')
        .then((res) => setQuestions(res.data.questions))
        .catch((err) => console.log(err))
    }, [])

    // use search key to filter results
    useEffect(() => {
        // if there is no searchKey, then we return all questions
        if(!searchKey) setFilteredQuestions([])
        const relQuestions = []
        questions.filter(question => {

            if(question.question.toLowerCase().includes(searchKey.toLowerCase())) {
                relQuestions.push(question)
            }
        })
        setFilteredQuestions(relQuestions)

     }, [searchKey])


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
                                autoComplete="off"
                                value={searchKey}
                                onChange={e => setSearchKey(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </div>
            </div>

            <div className="answer messages">
                <div className="message last">
                    <h5>Ask me one of the following!</h5>
                    <div>
                        {filteredQuestions.map(el => {
                            return (
                                <div key={el.id}>
                                    <ul>
                                        <li>{el.question}</li>
                                    </ul>
                                    
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Container>

    </div>
  )
}
