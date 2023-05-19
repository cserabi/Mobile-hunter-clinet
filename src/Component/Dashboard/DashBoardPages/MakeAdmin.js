import React, { useState } from 'react';
import { ButtonGroup, Button, Alert } from 'react-bootstrap';
import useAuth from '../../Hook/useAuth';
import Dashboard from '../Dashboard';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  // const { error } = useAuth();
  // console.log(error);
  const { error}=useAuth();

  const handleOnblur = e => {
    setEmail(e.target.value);
  }
  const handleSubmit = e => {
    const user = { email }
    console.log(user);
    fetch('http://localhost:5000/users/admin', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)

    })
        .then(res => res.json())
        .then(data => {
            setSuccess(true);
            setEmail('')
            console.log(data)
        }

        )


    e.preventDefault();
}

  return (
    <Dashboard>
      <div>
        <form onSubmit={handleSubmit} >

          <input onBlur={handleOnblur} type="email" name="email" placeholder="write your new admin email" />

          <input type="submit" value="Submit" lassName="btn btn-primary btn-organization p-3"  />
        
        
        </form>


        {success && <Alert variant="success"> Made Admin successfully!</Alert>}


      </div>
    </Dashboard>
  );
};

export default MakeAdmin;