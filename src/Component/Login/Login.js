import React from 'react';
import { Card, Button } from 'react-bootstrap';
import useAuth from '../Hook/useAuth';



const Login = () => {


  const { signInUsingGoogle } = useAuth();
  return (
    <div className="container-fluid m-3">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">

          <Card className="text-center">

            <Card.Body className="shadow">
              <Card.Title>Create Account with Google</Card.Title>

              <Button onClick={signInUsingGoogle} variant="primary">Sign With Google</Button>
            </Card.Body>

          </Card>
        </div>
        <div className="col-md-4"></div>
      </div>

    </div>
  );
};

export default Login;