import React from 'react';
import { ButtonGroup, Container, Nav, Navbar, Button } from 'react-bootstrap';
// import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import useAuth from '../Hook/useAuth';


import './Header.css';
// import { Link } from 'react-router-hash-link';

const Header = () => {


  const { user, logOut } = useAuth();
  return (


    <Navbar collapseOnSelect expand="lg" className="header-container bg-color-design" sticky="top">
      <Container >
        <Navbar.Brand href="#home"><img style={{ width: '120px', marginTop: '-5px' }} src="https://i.postimg.cc/8P39HX3d/Techmart-logo-update.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">

            <Nav.Link className="text-light" as={Link} to="/home">Home</Nav.Link>
            {/* <Nav.Link className="text-light" as={Link} to="/topbanner">Top Banner</Nav.Link> */}


            <Nav.Link className="text-light" as={Link} to="/explore">Explore</Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/review">Review </Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/faq">FAQ</Nav.Link>

            <Nav.Link className="text-light" as={Link} to="/dashboard">Dashboard</Nav.Link>

            <Nav.Link className="text-light" as={Link} to="/contactUs">Contact Us</Nav.Link>
          </Nav>
          <Nav>

            {
              !user?.email ?
                <div className="d-flex">
                  <Nav.Link className="text-light-custom btn-color " as={Link} to="/login"> Login </Nav.Link>
                  <Nav.Link className="text-light-custom btn-login px-3 btn-color signup-right" as={Link} to="/Register"> Register </Nav.Link>

                </div>
                :
                <div className="d-flex">
                  <img src={user?.photoURL} className="profile-image" alt="profile" />
                  <p className="text-light-name mx-2">{user?.displayName}</p>
                  <Button onClick={logOut} className="btn-login px-3 me-3 btn-color">Logout</Button>

                </div>
            }






          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >





  );
};

export default Header;