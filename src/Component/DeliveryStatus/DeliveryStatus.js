import React, { useEffect, useState } from "react";
import { CloseButton, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./DeliveryStatus.css";

import useAuth from "../Hook/useAuth";
import MiddleStatus from "./MiddleStatus";

const DeliveryStatus = () => {
  const { OrderId } = useParams();
  const [visible, setVisible] = useState(false);
  const { user } = useAuth();
  const [SingleOrder, setSingleOrder] = useState({});
  const [Orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  // console.log(OrderId);

  useEffect(() => {
    const foundOrders = Orders.find((order) => order._id === OrderId);

    setSingleOrder(foundOrders);
  }, [Orders]);

  return (
    <div className="container">
      <div className="row">
        <h4
          className="text-center m-3"
          style={{ color: "#020f24", fontWeight: "bold" }}
        >
          {" "}
          Check out Delivery Status{" "}
        </h4>

        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Table
            className="w-100 m-auto "
            striped
            bordered
            hover
            responsive
            style={{
              color: "#004FF9",
              border: "2px solid #004FF9",
              textAlign: "left",
            }}
          >
            <tbody>
              <tr>
                {/* <th>#</th> */}
                <td>Booking Date</td>
                <td>{SingleOrder?.date}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Booking From</td>
                <td>Techmart, HSTU</td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Destination</td>
                <td>{SingleOrder?.Address}</td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Receiver Contact</td>
                <td>{SingleOrder?.Phone}</td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Item Description</td>
                <td>Mobile</td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>LOT</td>
                <td>1</td>
              </tr>
            </tbody>
          </Table>
        </div>
        {/* <Link to={`/middleStatus/${SingleOrder?._id}`}>

          <button className="btn btn-primary"> Middle Status</button>{" "}
        </Link> */}


        <div className="col-md-2"></div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Table
            striped
            bordered
            hover
            responsive
            style={{ marginTop: "20px" }}
          >
            <thead style={{ backgroundColor: "#004FF9", color: "white" }}>
              <tr>
                {/* <th>#</th> */}
                <th></th>
                <th>SN Number</th>
                <th>Status Date</th>
                <th>Last Status</th>
                <th>Vehicle</th>
                <th>Mnf./SL No.</th>
              </tr>
            </thead>


          </Table>
        </div>

        <div className="col-md-2">

        </div>



      </div>

      <div className="row">

        <div className=""><MiddleStatus data={SingleOrder?.Phone}></MiddleStatus></div>

      </div>

    </div>
  );
};

export default DeliveryStatus;
