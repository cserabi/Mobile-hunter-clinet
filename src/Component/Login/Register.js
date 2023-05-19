import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hook/useAuth';


const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user,
    signInWithGoogle,
    logOut,
    setUser,
    setError,
    error,
    isLogin,
    isLoading,
    registerUser } = useAuth();
  const history = useHistory();


  const handleSubmit = e => {
    registerUser(loginData.email, loginData.password, loginData.name, history);

    if (loginData.password !== loginData.password2) {
      alert('Your password did not match');
      return;
    }
    e.preventDefault();
  };

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    console.log(newLoginData);
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }
  return (
    <div>


      <div className="text-center my-5">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            onBlur={handleOnBlur}
            name='name'
            type='name'
            style={{ marginBottom: '1vw', width: '15%' }}
            defaultValue="name" />
          <br />

          <input
            name='email'
            type='email'
            onBlur={handleOnBlur}
            style={{ width: '15%', marginBottom: '1vw' }}
            placeholder="Email" /><br />
          {/* {error.email && <span>This field is required</span>}<br /> */}

          <input
            name='password'
            type='password'
            onBlur={handleOnBlur}
            style={{ width: '15%', marginBottom: '1vw' }}
            placeholder="Password" /><br />
          {/* {error.password && <span>This field is required</span>}<br /> */}

          <input
            name='password2'
            type='password'
            onBlur={handleOnBlur}
            style={{ width: '15%', marginBottom: '1vw' }}
            placeholder="Re-enter Password" /><br />
          {/* {error.password2 && <span>This field is required</span>}<br /> */}

          <input
            className="mb-3"
            style={{ width: '15%', backgroundColor: '#FF0044', fontWeight: 'bold', border: 'none', padding: '10px', borderRadius: '5px', color: 'white' }}
            type="submit" />
        </form>
        <NavLink to="/login">
          <span style={{ fontWeight: 'bold', textDecoration: 'none' }}>Already Registered?</span>
          <button style={{ border: 'none', backgroundColor: '#004ff9', color: 'white', marginLeft: '20px', fontWeight: '400px' }} className=""> Please Login</button>
        </NavLink>
        {/* {isLoading && <Spinner animation="border" />} */}
        {user?.email && <Alert variant="success"> User Created successfully!</Alert>}
        {/* {error && <Alert variant="danger">{error}</Alert>} */}

      </div>

      <div className="text-center my-5 py-5">
        <button onClick={signInWithGoogle} className=" mx-auto py-2 px-4" style={{ backgroundColor: '#004ff9', border: '0px', borderRadius: '10px', color: 'white', fontWeight: '500' }}><img src='https://i.postimg.cc/pX3LGnng/66893-guava-logo-google-plus-suite-png-image-high-quality.png' style={{ height: '50px' }} /><i className="bi bi-google me-4"></i>Continue with Google</button>

      </div>




    </div>

  );
};

export default Register;

