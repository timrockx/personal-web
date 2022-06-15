import React from 'react'
import './Menu.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    
    <div className="nav-div">
        <Container>

          <Navbar className="py-4 mx-auto">
  
              <Navbar.Brand as={NavLink} to="/" className="fs-3">Timothy Lee</Navbar.Brand>
              <Nav className="d-flex justify-content-end flex-grow-1" activeKey="/">                  
                  
                  <Nav.Link as={NavLink} to="/education" className="nav-link fs-4">Education</Nav.Link>
       
                  
                  <NavDropdown title="Portfolio" id="nav-dropdown">
                      <NavDropdown.Item>
                        <Nav.Link>Chase that Pump</Nav.Link>                      
                      </NavDropdown.Item>
                      <NavDropdown.Item>                        
                        <Nav.Link href="#react-app">Spotify React App</Nav.Link>      
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Nav.Link href="#investment-thesis">Investment Thesis</Nav.Link>                        
                      </NavDropdown.Item>
                  </NavDropdown>
              </Nav>
          </Navbar>
        
        </Container>
      </div>

  
  )
}
