import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (

    <div className="container-fluid">
      <div className="row">

        <div className="col-md-12">


          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.postimg.cc/zBGpgmFY/Banner-1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="Text-custom-pro w-25">Best Mobile </h3>
                <p className="Text-custom-pro w-50">Amazing quality with Minimum price</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.postimg.cc/ncD27GBr/Banner-2.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3 className="Text-custom" >Mobile Gadget</h3>
                <p className="Text-custom" >High quality product with warrenty 2 years.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.postimg.cc/131HKVrH/Banner-3.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3 className="Text-custom" >Buy Smart Phone</h3>
                <p className="Text-custom" >You can buy any brand smart phone from here.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

      </div>

    </div>
  );
};

export default Banner;