import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
 import    "./MiddleStatus.css";
import { Spinner } from 'react-bootstrap';
 

const MiddleStatus = ({data}) => {


  const [status, setStatus] = useState([]);
  const [newStatus,setNewStatus]=useState([]);
 
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
  
  
       
  useEffect(()=>{
    const updateStatus=status.filter(order=> order.phone === data)
    setNewStatus(updateStatus);

  },[status])



  

 

  return (
    <div>
<div className="overflow-x-auto margin-0-auto">
  <table className="table w-75 text-center">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Date</th>
        <th>Location</th>
        <th>Vehicle</th>
       

      </tr>
    </thead>

        {
            spinner && <Spinner  />
          }
     
        {
          newStatus.map(item=><div className='col' key={item._id}>

            <tbody className="table w-75 text-center">
          
            <tr>
            
              <td>{item.date}</td>
              <td>{item.last}</td>
              <td>{item.vehicle}</td>
             
            </tr>
          </tbody>

          </div>)
       

    
    }

    
  </table>
</div>


    </div>
  )
}

export default MiddleStatus;
