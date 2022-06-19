import React from 'react'
import './Menu.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link'

export default function Menu() {
  return (
    
    <div className="nav-div">
        <Container>

          <Navbar className="navbar-nav py-4 mx-auto" fixed="bottom">
  
              <Navbar.Brand as={HashLink} to="/" className="fs-3">Timothy Lee</Navbar.Brand>
              <Nav className="d-flex justify-content-end flex-grow-1" activeKey="/">                  
                  
                  <Nav.Link as={HashLink} to="/background/#education" className="nav-link fs-4">Education</Nav.Link>

                  <Nav.Link as={HashLink} to="/background/#experience" className="nav-link fs-4">Experience</Nav.Link>

                  <Nav.Link as={HashLink} to="/background/#skills" className="nav-link fs-4">Skills</Nav.Link>

                  <Nav.Link as={HashLink} to="/projects" className="nav-link fs-4">Projects</Nav.Link>

              </Nav>
          </Navbar>
        
        </Container>
      </div>

  
  )
}
