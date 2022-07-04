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

          <Navbar collapseOnSelect expand="sm" className="navbar-nav py-4 mx-auto" fixed="bottom">

              <Navbar.Brand as={HashLink} to="/" className="nav-link fs-3">
                <FontAwesomeIcon icon={faHouse} className="icon-sm" />
                  <h4>Home</h4>
              </Navbar.Brand>

              <Nav className="navbar" activeKey="/">                  
                  
                  <Nav.Link as={HashLink} to="/background/#education" className="nav-link fs-4">
                    <FontAwesomeIcon icon={faSchool} className="icon-sm"/>
                    <h4>Education</h4>
                  </Nav.Link>

                  <Nav.Link as={HashLink} to="/background/#experience" className="nav-link fs-4">
                    <FontAwesomeIcon icon={faBriefcase} className="icon-sm"/>
                    <h4>Experience</h4>
                  </Nav.Link>

                  <Nav.Link as={HashLink} to="/background/#skills" className="nav-link fs-4">
                    <FontAwesomeIcon icon={faWrench} clasName="icon-sm"/>
                    <h4>Skills</h4>
                  </Nav.Link>

                  <Nav.Link as={HashLink} to="/background/#projects" className="nav-link fs-4">
                    <FontAwesomeIcon icon={faLaptopCode} className="icon-sm"/>
                    <h4>Projects</h4>
                  </Nav.Link>

              </Nav>

      

          </Navbar>
        
        </Container>
      </div>

  
  )
}
