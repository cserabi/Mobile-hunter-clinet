import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Subscriber.css';

const Subscriber = () => {
  return (
    <div style={{ backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/573134948259b541884a78c8/1526937602218-L7UI55HW18SRGWILO5GK/Change+Management.jpg)`, height: '300px', backgroundColor: 'black', opacity: '0.85', borderRadius: '50px', margin: '0px 50px' }}>



      <div >
        <Form className='subscriber-auto' >
          
          Subscriber part
          <label>

            <input className='input-mail' type="text" name="mail" placeholder='  Enter your email adress and subscribe for getting more update' style={{ border: '3px solid #004E81', width: '500px', borderRadius: '10px 0px 0px 10px', height: '42px' }} />
            <Button style={{ backgroundColor: 'red', borderRadius: '0px 10px 10px 0px', border: '3px solid #004E81', marginBottom: '5px' }}>Subscribe</Button>
          </label>
        </Form>

      </div>
    </div>
  );
};

export default Subscriber;
