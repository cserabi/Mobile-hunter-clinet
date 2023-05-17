import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import useAuth from '../Hook/useAuth';
import './Review.css';


const Review = () => {
  const [newReview, setnewReview] = useState([]);

  const { user, logOut } = useAuth();
  useEffect(() => {

    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setnewReview(data))

    console.log(newReview);
  }, [])


  // const makeReview = (num) => {
  //   const str = `<i class="fas fa-star"/>`
  //   let newStr = ``
  //   for (let i = 0; i <= num; i++) {
  //     newStr += str;
  //   }
  //   document.getElementById("custom").innerHTML = str;

  // }




  return (
    <div className="container-fluid">
      <h4 className="text-center"> Client Recommendation and Experience </h4>
      <div className="d-flex justify-content-center align-items-center flex-wrap">

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4"></div>

            <div className="col-md-4">


              <Carousel>

                {
                  newReview.map(reviewer =>


                    <Carousel.Item>
                      <img
                        className="image-bg d-block w-100"
                        src="https://media.istockphoto.com/vectors/triangles-background-vector-id940466680?k=20&m=940466680&s=612x612&w=0&h=jz32ccCcAVH_hFN-bnuelxQU0o5hgQrMFIR_lkMOsCc="

                        alt="First slide"
                      />



                      <Carousel.Caption>
                        <h3 className="text-dark text-center ">{reviewer.name} </h3>



                        <p className="text-dark text-center">
                        </p>



                        <div style={{ color: '#ff3700' }}>

                          {

                            reviewer.review === '1' ? <div> <i class="fas fa-star" /></div>
                              : reviewer.review === '2' ? <div><i class="fas fa-star" /> <i class="fas fa-star" /></div>
                                : reviewer.review === '3' ? <div><i class="fas fa-star" /><i class="fas fa-star" /> <i class="fas fa-star" /> </div>
                                  : reviewer.review === '4' ? <div><i class="fas fa-star" /><i class="fas fa-star" /><i class="fas fa-star" /> <i class="fas fa-star" /> </div>
                                    : reviewer.review === '5' ? <div><i class="fas fa-star" /><i class="fas fa-star" /><i class="fas fa-star" /><i class="fas fa-star" /> <i class="fas fa-star" /> </div>
                                      : <p style={{ color: '#ff3700' }}>no review found </p>

                          }
                          {/* <div class="custom"></div> */}

                        </div>



                        <h5 className="text-dark text-center"> " {reviewer.comment} " </h5>

                      </Carousel.Caption>
                    </Carousel.Item>
                  )
                }



              </Carousel>






            </div>


            <div className="col-md-4"></div>

          </div>

        </div>


      </div>

    </div >
  );
};

export default Review;