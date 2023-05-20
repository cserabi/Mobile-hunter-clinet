import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
// import { AccordionButton, Card, useAccordionButton } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import { render } from 'react-dom';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="container">
      <h3 className="text-center text-color-header"><i className="icon-color" class="fas fa-chalkboard-teacher"></i>  Frequently Asked Question</h3>
      <div className="row ">
        <div className="col-md-3"></div>
        <div className="col-md-6 shadow m-2 p-4">

          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Which service provide TechMart ? </Accordion.Header>
              <Accordion.Body>
                Mainly we are Mobile selling E-commerce platform .We focus on selling Smart phone.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Can i get service you from outside Dhaka or Bangladesh ?</Accordion.Header>
              <Accordion.Body>
                Yes , you can place order any where in the world not only Dhaka .
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>How much will be delivery charge per product? </Accordion.Header>
              <Accordion.Body>
                We will take delivery charge 150 tk per product .you can receive product from any where in bangladesh.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="col-md-3"></div>
      </div>

    </div>
  );
};

export default FAQ;