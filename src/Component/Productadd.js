import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import Dashboard from './Dashboard/Dashboard';

const Productadd = () => {


  const nameRef = useRef();
  const desRef = useRef();
  const priceRef = useRef();
  const warrantyRef = useRef();
  const piclinkRef = useRef('');

  const handleAddUser = e => {

    const Name = nameRef.current.value;
    const des = desRef.current.value;
    const price = priceRef.current.value;
    const warranty = warrantyRef.current.value;
    const piclink = piclinkRef.current.value;



    const newProduct = { Name, des, price, warranty, piclink }
    console.log(newProduct);

    fetch('http://localhost:5000/addProducts', {

      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },

      body: JSON.stringify(newProduct)
    })

      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          alert('successfully added new product');
          e.target.reset();
        }

        else {
          alert('failed to add product');
          e.target.reset();
        }
      })
    e.preventDefault();
  }
  return (
    <Dashboard>
      <div>


        <div className="container">
          <h4 className="text-center">Please add new product on your store</h4>
          <div className="row">

            <div className="col-md-3"></div>
            <div className="col-md-6 shadow">
              <Form onSubmit={handleAddUser}>
                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingInputCustom"
                    type="Text"
                    placeholder="name@example.com"
                    ref={nameRef}
                    required
                  />
                  <label htmlFor="floatingInputCustom">Write your Product Name</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingPasswordCustom"
                    type="text"

                    ref={desRef}
                    required

                  />

                  <label htmlFor="floatingPasswordCustom">Describe something about your product </label>
                </Form.Floating>

                <Form.Floating className="mb-3">

                  <Form.Control
                    id="floatingPasswordCustom"
                    type="number"
                    placeholder="text"
                    ref={priceRef}
                    required
                    min="999"
                  />
                  <label htmlFor="floatingPasswordCustom">Write your Product price </label>
                </Form.Floating>
                <Form.Floating className="mb-3">

                  <Form.Control
                    id="floatingPasswordCustom"
                    type="text"
                    placeholder="text"
                    ref={warrantyRef}
                    required
                  />
                  <label htmlFor="floatingPasswordCustom">Write your Product warranty time </label>
                </Form.Floating>
                <Form.Floating className="mb-3">

                  <Form.Control
                    id="floatingPasswordCustom"
                    type="text"
                    placeholder="text"
                    ref={piclinkRef}
                  />
                  <label htmlFor="floatingPasswordCustom">Please given your product picture link </label>
                </Form.Floating>

                <input to='/addProduct' type="submit" value="Submit" className="btn btn-primary btn-organization p-3 w-100 mb-3" />
              </Form>

            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div >
    </Dashboard>
  );

};

export default Productadd;
