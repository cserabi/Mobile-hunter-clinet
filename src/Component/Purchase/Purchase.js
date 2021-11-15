import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../Hook/useAuth';

const Purchase = () => {

  const [prodcuts, setprodcuts] = useState([]);
  const [singleService, setSingleService] = useState({})
  const [orders, setOrders] = useState([]);



  const { user } = useAuth();
  const { id } = useParams();


  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setprodcuts(data))
  }, [])

  useEffect(() => {
    const foundproducts = prodcuts.find(product => product._id === id);
    setSingleService(foundproducts);
  }, [prodcuts])



  const onSubmit = data => {
    const serviceData = {
      ...data,
      status: 'pending'
    };
    const url = 'https://localhost:5000/orders';
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
          // reset();
        }
      })
  }


  return (
    <div>
      <h2>You have purchase items id {id} </h2>
      <h2>{singleService?.Name}</h2>
      <h2>{singleService?.des}</h2>

    </div>
  );
};

export default Purchase;