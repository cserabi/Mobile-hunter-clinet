import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./MiddleStatus.css";
import { Spinner, Table } from 'react-bootstrap';


const MiddleStatus = ({ data }) => {


  const [status, setStatus] = useState([]);
  const [newStatus, setNewStatus] = useState([]);

  const { middleId } = useParams();
  // console.log(middleId);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/status/${middleId}`)
      .then(res => res.json())
      .then(data => {
        setStatus(data)
        setSpinner(false)
      }
      )
  }, []);



  useEffect(() => {
    const updateStatus = status.filter(order => order.phone === data)
    setNewStatus(updateStatus);

  }, [status])







  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>

          <div className="col-md-8">
            <Table className="  text-center">


              <thead>
                <tr>
                  {/* <th>#</th> */}
                  <th>Date </th>
                  <th>Last Status</th>

                  <th>Vehicle</th>
                  <th>Mnf./SL No.</th>

                </tr>
              </thead>
            </Table>
            {
              spinner && <Spinner />
            }

            {


              newStatus.map(item => <div className='' key={item._id}>

                <Table>


                  <tbody className="text-center margin-item">



                    <tr>

                      <td className='margin-item ' >{item.date}</td>
                      <td className='margin-item' >{item.last}</td>
                      <td className='margin-item' >{item.vehicle}</td>
                      <td className='margin-item' >{item.MnfSLNo}</td>

                    </tr>
                  </tbody>
                </Table>



              </div>)



            }






          </div>

          <div className="col-md-2">

          </div>
        </div>
      </div>

    </div >
  )
}

export default MiddleStatus;
