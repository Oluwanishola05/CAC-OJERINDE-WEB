import React from "react";
import logo from '../../assets/image/cac-logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom"; 


const Header2= () => {
    return(
    <>
            <Navbar expand="lg" className="bg-body-tertiary" sticky="top" data-bs-theme="dark">
      <Container>
      <Navbar.Brand href="/home">
         <img src={logo} alt="logo" width="45" height="40"/>
        </Navbar.Brand>
        <Navbar.Brand href="/home">
           <b> CHRIST APOSTOLIC CHURCH</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
          <Nav className=" justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutUs">About Us</Nav.Link>
            <Nav.Link href="/currentLeader">Current Leader</Nav.Link>
            <NavDropdown title="Departments" id="basic-nav-dropdown">
              <NavDropdown.Item href="/choir">Choir</NavDropdown.Item>
              <NavDropdown.Item href="/media">Media</NavDropdown.Item>
              <NavDropdown.Item href="/usher">Usher</NavDropdown.Item>
              <NavDropdown.Item href="/children">Children </NavDropdown.Item>
              <NavDropdown.Item href="/youth">Youth</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/sundaySchool">Sunday School</NavDropdown.Item>
              <NavDropdown.Item href="royalShepard">Royal Shepard</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/gallery">Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
);
}

export default Header2;