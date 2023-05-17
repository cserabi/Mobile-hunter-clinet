import React, { useState, useEffect } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';
import Dashboard from '../Dashboard';
import useAuth from '../../Hook/useAuth';
import './MyOrder.css';
import { Link } from 'react-router-dom';

const MyOrder = () => {

  const [myOrders, setMyOrders] = useState([]);
  const [orders, setorders] = useState([]);
  const { user } = useAuth();
  const [show, setShow] = useState(false);
  const [spinner, setSpinner] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
  })



  //cancel personal Orders 
  const handleDelete = id => {

    const proceed = window.confirm('Are you sure , you want to delete?');

    // console.log(id);
    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: 'DELETE'
      })

        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert('Order cancel successfully');
            const remaining = myOrders.filter(myBook => myBook._id !== id);
            setMyOrders(remaining);

          }
        }
        );
    }
  }






  return (
    <Dashboard>
      <div className='container'>
        <div className="row row-cols-1 row-cols-md-2 g-4 mx-auto">
          {
            spinner && <Spinner className="mx-auto" animation="border" variant="dark" />
          }
          {
            myOrders.map(mybook => <div className="col"
              key={mybook._id} >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{mybook.name}</h5>
                  {/* <h5>Email: {mybook.email}</h5> */}

                  <p>Orders Id: {mybook._id}</p>
                  <p>Phone Number : {mybook.Phone}</p>
                  <p className="card-text">Address: {mybook.Address}</p>


                  <p className="card-text"> Booking Date: {mybook.date}</p>

                  {/* {mybook.status === 'pending'} */}

                  <Link to={`/deliverystatus/${mybook._id}`}  ><button className="btn btn-primary">Delivery Status</button> </Link>
                  <p>Status: {mybook.status}</p>
                  <div className="">
                    <button onClick={() => handleDelete(mybook._id)} className="me-5 btn btn-primary">Cancel Orders</button>
                    <button className="me-5 btn btn-pay" >Pay</button>
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

export default MyOrder;