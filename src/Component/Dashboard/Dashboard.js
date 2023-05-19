import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Header from '../Header/Header';
import Sidebar from './Sidebar';

const Dashboard = ({ children }) => {
  return (
    <div>

      {/* <Header></Header> */}
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        </Container>


      </Navbar>


      <div className="container my-4   position-sticky">
        <div className="row">
          <Sidebar></Sidebar>
          <div className="col-md-9 my-2">
            {children}
          </div>

        </div>
      </div>



    </div>
  );
};

export default Dashboard;