import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';

import useAuth from '../Hook/useAuth';
import './Purchase.css';
import { Link } from 'react-router-dom';
import Payment from '../Payment/Payment';
import { useParams } from 'react-router-dom';


const Purchase = () => {
  const { user } = useAuth();
  const { productId } = useParams();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [products, setproducts] = useState([]);
  const [singleService, setSingleService] = useState({});
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setproducts(data))
  }, [])


  console.log(productId);
  useEffect(() => {
    const foundproducts = products.find(product => product._id === productId);
    setSingleService(foundproducts);
  }, [products]);


  const onSubmit = data => {
    console.log(data);
    const serviceData = {
      ...data,
      status: 'pending'
    };
    const url = 'http://localhost:5000/orders';
    fetch(url, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(serviceData)
    })
      .then(res => {
        if (res) {
          setOrders([]);
          alert('Order Successfully');



          <Redirect to='/pay' />
          //reset();
        }
      })
  }


  if (!user.email) {
    return <Redirect to='/login' />
  }


  return (
    <div>
      {/* <h2>You have purchase items id {id} </h2> */}
      <h2>{singleService?.Name}</h2>
      <h2>{singleService?.des}</h2>




      <div className="card my-5 container p-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={singleService?.piclink} style={{ width: '400px', height: '400px' }} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-4 ps-4">
            <div className="card-body">
              <h5 className="card-title">{singleService?.name}</h5>
              <p className="card-text">{singleService?.description}</p>
              <p className="card-text"><small className="text-muted">Price : <strong>{singleService?.price} Tk</strong></small></p>
            </div>
          </div>

          <div className="col-md-4">
            <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
              <input defaultValue={user.displayName} {...register("name")} /> <br />
              <input placeholder="email" defaultValue={user.email} {...register("email", { required: true })} /> <br />
              {errors.email && <span className="error">This field is required</span>} <br />

              <input type='date' placeholder="Order Date" defaultValue="" {...register("date", { required: true })} required /> <br />
              <input placeholder="Address" defaultValue="" {...register("Address", { required: true })} /> <br />
              {errors.Address && <span>Address is required </span>}

              <input placeholder="phone number" defaultValue="" {...register("Phone", { required: true })} required /> <br />

              <input value="Confirm Order" className='confirm-button' type="submit" to="/Payment"></input>


            </form>
          </div>
        </div>
      </div>

    </div >
  );
};

export default Purchase;