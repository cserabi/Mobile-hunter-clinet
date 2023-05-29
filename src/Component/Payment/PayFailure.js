import React from 'react';
import './PaySuccess.css';

const PayFailure = () => {
  return (
    <div>
      <div className="container">

        <div className="row">

          <div className="col-md-2"></div>
          <div className="col-md-8 bg-custom-box-cancel">


            <h3>Sorry!!! Your Payment is not completed yet. </h3>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default PayFailure;