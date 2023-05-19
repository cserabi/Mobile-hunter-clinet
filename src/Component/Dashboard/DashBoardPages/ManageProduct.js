
import React, { useState, useEffect } from 'react';
import { Modal, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard';

const ManageProduct = () => {


  const [allOrders, setAllOrders] = useState([]);
  const [status, setStatus] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch('http://localhost:5000/manageProducts')
      .then(res => res.json())
      .then(data => {
        setAllOrders(data)
      })
  }, [status]);
  

  const modalShow = id => {
    setShow(true);
  }
  const handleDelete = id => {


    const url = `http://localhost:5000/manageProducts/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount) {
          const remaining = allOrders.filter(order => order._id !== id);
          setAllOrders(remaining);
          setShow(false);
        }

      })
  }

  const handleUpdateStatus = id => {
    const update = {
      status: 'Shipped'
    }
    const url = `http://localhost:5000/manageProducts/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(update)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          setStatus(data);
          alert('Status updated successfully');

        }
      })
  }
  let orderNo=1;

  return (
    <Dashboard>
      <div style={{ paddingTop: '10px', paddingBottom: '10px', backgroundColor: 'whitesmoke' }} className='position-sticky'>
        <h1 className='text-center m-3' style={{ color: '#020f24', fontWeight: 'bold' }}> Manage All Product </h1>
        <Table className="w-100 m-auto text-center" striped bordered hover responsive style={{ color: '#020f24' }}>
          <thead>
            <tr>
              {/* <th>#</th> */}
              <th>Product No </th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Warranty</th>
           
            </tr>
          </thead>
          <tbody>
           
            {      
              allOrders.map((list) => (
                <tr> 
                  <td>{orderNo++}</td>
                  <td>{list.Name}</td>
                  <td>{list.email}</td>
                  <td>{list.price}</td>
                  <td>{list.warranty}</td>

                  
                  <td>
                    <button className=" btn btn-danger" onClick={() => handleDelete(list._id)}>Delete</button>
                    <Link to={`/updateProduct/${list._id}`}  ><button className="btn btn-primary">Update</button> </Link>

                    {/* <button onClick={() => handleUpdateStatus(list._id)} className="btn btn-success ms-4"> Shipped</button> */}
                  </td>

                  {/* <Modal show={show} onHide={handleClose}>
                    <Modal.Body>Are you sure to want to cancel this booking service ?</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Cancel
                      </Button>
                      <Button variant="primary" onClick={() => handleDelete(list._id)}>
                        Confirm
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  */}
                </tr>
              )).reverse()
            }
          </tbody>
        </Table>
      </div>
    </Dashboard>
  );
};

export default ManageProduct;