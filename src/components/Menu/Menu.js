import React from 'react'
import './Menu.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faLaptopCode, faSchool, faWrench, faHouse } from '@fortawesome/free-solid-svg-icons'

export default function Menu() {
  return (
    
    <div className="nav-div">
        <Container fluid>

          <Navbar className="navbar-nav py-4 mx-auto" fixed="bottom">
  
              <Navbar.Brand as={HashLink} to="/" className="fs-3">
                <FontAwesomeIcon icon={faHouse} />&nbsp;Timothy Lee
              </Navbar.Brand>
              <Nav className="d-flex justify-content-end flex-grow-1" activeKey="/">                  
                  
                  <Nav.Link as={HashLink} to="/background/#education" className="nav-link fs-4">
                    <FontAwesomeIcon icon={faSchool}/>&nbsp;Education
                  </Nav.Link>

                  <Nav.Link as={HashLink} to="/background/#experience" className="nav-link fs-4">
                    <FontAwesomeIcon icon={faBriefcase}/>&nbsp;Experience
                  </Nav.Link>

                  <Nav.Link as={HashLink} to="/background/#skills" className="nav-link fs-4">
                    <FontAwesomeIcon icon={faWrench}/>&nbsp;Skills
                  </Nav.Link>

                  <Nav.Link as={HashLink} to="/background/#projects" className="nav-link fs-4">
                    <FontAwesomeIcon icon={faLaptopCode}/>&nbsp;Projects
                  </Nav.Link>

              </Nav>
          </Navbar>
        
        </Container>
      </div>

  
  )
}
