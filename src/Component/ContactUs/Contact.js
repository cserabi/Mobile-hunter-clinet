import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Result = () => {
  return (
    <p >Your message has been successfully sent . We will contact you soon</p>
  )
}

const Contact = () => {


  const form = useRef();

  const [result, setresult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8kwia45', 'template_qtug28v', form.current, 'user_kJ9AIkdKE2TSnIaRha6XZ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });


    e.target.reset();
    setresult(true);
  };

  //hide result

  setTimeout(() => {
    setresult(false)
      ;
  }, 5000)

  return (

    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>

        </div>

        <div className='col-md-4 bg-custom-pink'>
          <form ref={form} onSubmit={sendEmail}>

            <h3 className='text-center'>Contact Us</h3>
            <label>Name</label><br />
            <input className="w-100" type="text" name="fullName" />
            <br />
            <label>Email</label><br />
            <input className="w-100" type="email" name="email" />
            <br />
            <label>Phone</label><br />
            <input className="w-100" type="text" name="phone" />
            <br />
            <label>Message</label><br />
            <textarea className="w-100" name="message" />
            <br />
            <input className="w-50 text-center submit-btn" type="submit" value="Send" />
            <div className='row m-3'>

              {result ? <Result /> : null}


            </div>


          </form>
        </div>

        <div className='col-md-4'>

        </div>
      </div>
    </div>


  );
};

export default Contact;