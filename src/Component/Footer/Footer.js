import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="container-fluid bg-custom">
      <div className="row">



        <div className="col-md-3">
          <p><i class="fas fa-phone-alt"></i> 01792181248 (24/7 )<br />
            <i class="fas fa-envelope"></i> techmart@gmail.com <br />
            <i class="fas fa-map-marker-alt"></i> 235 Dr. Wajed Miah Building , CSE , HSTU , Bangladesh</p>
          <img src="https://i.postimg.cc/VNWxxj2x/Screenshot-25.png" alt="" />
        </div>


        <div className="col-md-3">
          <p>
            About Us<br />
            Feedback<br />
            Community<br />
            Trust, Safety & Security<br />
            Help & Support<br />
          </p>

        </div>
        <div className="col-md-3">

          <p>

            Success<br />
            Refund policy<br />
            Terms and Conditions<br />
            Privacy Policy<br />
            Events<br />
            Blog<br />
            Forum<br />
            Community Standards<br />
            Podcast<br />

            <div className="icon-size">


              <i class="fab fa-facebook-square fa-2x"></i>

              <i class="fab fa-instagram-square fa-2x"></i>
              <i class="fab fa-twitter-square fa-2x"></i>
              <i class="fab fa-pinterest-square fa-2x"></i>
            </div>

          </p>

        </div>


        <div className="col-md-3">



          Affiliates<br />
          Best Mobile Center<br />
          Invite a Friend<br />
          Become a Seller<br />

        </div>

      </div>

      <div className="row">
        <div className="col-md-4">

        </div>

        <div className="col-md-4 text-center">
          <h5>Copyright &copy; 2023 TechMart , Bangladesh</h5>
        </div>

        <div className="col-md-4">

        </div>
      </div>




    </div >
  );
};

export default Footer;