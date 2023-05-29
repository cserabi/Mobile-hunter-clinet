import React from 'react';

import { useState, useEffect } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';
import Dashboard from '../Dashboard';
import useAuth from '../../Hook/useAuth';
import './MyOrder.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Pay = () => {

  const [myOrders, setMyOrders] = useState([]);
  const [orders, setorders] = useState([]);
  const { user } = useAuth();
  const [show, setShow] = useState(false);
  const [spinner, setSpinner] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const paymentMethod = async (myBook) => {
    console.log(myBook);
    console.log("click");
    const res = await axios.post('http://localhost:5000/ssl-request', {
      price: myBook.price
    })
    console.log(res);
    window.open(res.data.url, '_self');

  }


  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then(res => res.json())
      .then(data => {
        setorders(data)
        setSpinner(false)
      }
      )
  }, [])


  useEffect(() => {
    const ownOrder = orders.filter(order => order.email === user?.email);
    setMyOrders(ownOrder);
  }, [orders])



  return (
    <Dashboard>
      <div className='container'>
        <div className="row row-cols-1 row-cols-md-2 g-4 mx-auto">
          {
            spinner && <Spinner className="mx-auto" animation="border" variant="dark" />
          }
          {
            myOrders.map(mybook => <div className="col" key={mybook._id} >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{mybook.name}</h5>
                  {/* <h5>Email: {mybook.email}</h5> */}

                  <br />


                  <p className='card-text'><b>Orders No:</b> {mybook._id}</p>
                  <p className='card-text'><b>Device Name: </b>{mybook.deviceName}</p>

                  <p className='card-text'><b>Product Price</b> : {mybook.price}</p>
                  {/* <p className="card-text">Address: {mybook.Address}</p> */}


                  {/* <p className="card-text"> Booking Date: {mybook.date}</p> */}

                  {/* {mybook.status === 'pending'} */}


                  <p>Status: {mybook.status}</p>
                  <div className="">

                    <button className="me-5 btn btn-pay w-50" onClick={() => paymentMethod(mybook)}  >Pay</button>
                  </div>
                </div>
                {/* <div>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Body>Are you sure to want to cancel your Orders ?</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Cancel
                      </Button>
                      <Button variant="primary" onClick={() => handleDelete(mybook._id)}>
                        Confirm
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div> */}

              </div>
            </div>
            ).reverse()
          }
        </div>
      </div>
    </Dashboard>
  );
};

export default Pay;