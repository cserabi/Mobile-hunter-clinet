import React from 'react';
import { Nav } from 'react-bootstrap';
import useAuth from '../Hook/useAuth';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { admin, logOut } = useAuth();
  return (

    <div className='col-md-3 col-sm-12'>
      <ul className='list-group sticky-top  py-2 position-sticky'>

        {!admin && <div>

          <Nav.Link className='list-group-item' as={Link} to="/myorder">My Orders</Nav.Link>
          <Nav.Link className='list-group-item' as={Link} to="/addreview">Add Review</Nav.Link>
          <Nav.Link className='list-group-item' as={Link} to="/pay">Pay</Nav.Link>

          <button style={{ width: '100%', textAlign: 'left' }} className="list-group-item" onClick={() => logOut()}>Logout</button>

        </div>}

        {admin && <div>
          <Nav.Link className='list-group-item' as={Link} to="/myorder">My Orders</Nav.Link>
          <Nav.Link className='list-group-item' as={Link} to="/addreview">Add Review</Nav.Link>
          <Nav.Link className='list-group-item' as={Link} to="/pay">Pay</Nav.Link>
          <Nav.Link className='list-group-item' as={Link} to="/manageOrders">Manage All Orders</Nav.Link>
          <Nav.Link className='list-group-item' as={Link} to="/addProducts">Add a Products</Nav.Link>
          <Nav.Link className='list-group-item' as={Link} to="/manageProducts">Manage Products</Nav.Link>
          <Nav.Link className='list-group-item' as={Link} to="/makeAdmin">Make Admin</Nav.Link>

          <button style={{ width: '100%', textAlign: 'left' }} className="list-group-item" onClick={() => logOut()}>Logout</button>

        </div>}
      </ul>
    </div>

  );

};

export default Sidebar;