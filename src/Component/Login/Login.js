import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hook/useAuth';



const Login = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const location = useLocation();

  const { signInWithGoogle, loginUser } = useAuth();



  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }
  const handleSubmit = e => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  }



  return (
    <div className="container-fluid m-3">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">

          <Card className="text-center">
            <h4>Login Here</h4>
            <form onSubmit={handleSubmit}>
              <input name='email'
                type='email'
                onChange={handleOnChange} className="form-control mt-4 " placeholder='email' />
              <input type="password" name="password" onChange={handleOnChange} className="form-control " placeholder='password' />
              <input type="submit" className="form-control text-center ms-4 mt-4 text-light bg-primary w-50" />


            </form>
            <Card.Body className="shadow">
              <Card.Title>Create Account with Google</Card.Title>

              <Button onClick={signInWithGoogle} variant="primary">Sign With Google</Button>
            </Card.Body>

          </Card>
        </div>
        <div className="col-md-4"></div>
      </div>

    </div>

  );
};

export default Login;