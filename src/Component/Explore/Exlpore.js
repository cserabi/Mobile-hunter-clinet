import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Explore.css';

const Explore = ({ slice }) => {
  const [newproduct, setNewproduct] = useState([]);


  useEffect(() => {

    fetch('https://stark-stream-58994.herokuapp.com/products')
      .then(res => res.json())

      .then(data => setNewproduct(data))

  }, [])
  return (
    <div className="container-fluid">
      <h4 className="text-center">Best Collection of Brands Smart Phone</h4>
      <div className="d-flex justify-content-center align-items-center flex-wrap">





        {


          newproduct.slice(0, slice).map(productlist =>
            <div className="card shadow my-4 m-3" style={{ width: '18rem' }}>
              <img className="card-img-top" width="200px" height="250px" src={productlist.piclink} alt="Card image cap" />
              <div className="card-body">
                <p className="card-text font-bold"> Mobile Name : {productlist.Name}</p>
                <p className="card-text"> Description : {productlist.des}</p>
                <p className="card-text"> Warranty : {productlist.warranty}</p>
                <p className="card-text"> price : {productlist.price} $</p>

                <Link to={`/purchase/:${productlist._id}`}  ><button className="btn btn-primary">Order Now</button> </Link>

              </div>
            </div>

          )
        }


      </div>

    </div >
  );
};

export default Explore;