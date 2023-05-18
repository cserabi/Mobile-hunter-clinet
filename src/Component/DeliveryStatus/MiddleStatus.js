import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const MiddleStatus = () => {


  const [status, setStatus] = useState([]);
  const { middleId } = useParams();
  console.log(middleId);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/status/${middleId}`)
      .then(res => res.json())
      .then(data => {
        setStatus(data)
        setSpinner(false)
      }
      )
  }, [])

  console.log(status);
  return (
    <div>

      Welcome to middle status page;


    </div>
  )
}

export default MiddleStatus;
