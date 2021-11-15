import React from 'react';
import { useParams } from 'react-router';

const Purchase = () => {


  const { id } = useParams();
  return (
    <div>
      <h2>You have purchase items id {id} </h2>
    </div>
  );
};

export default Purchase;