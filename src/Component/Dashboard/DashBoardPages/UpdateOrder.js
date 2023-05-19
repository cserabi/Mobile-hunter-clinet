import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UpdateOrder = () => {
  const { productId } = useParams();
  const [Orders, setOrders] = useState([]);
  const [singleOrder, setSingleOrder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  // console.log(OrderId);

  useEffect(() => {
    const foundOrders = Orders.find((order) => order._id === productId);

    setSingleOrder(foundOrders);
  }, [Orders]);

//   console.log(singleOrder);

  const nameRef = useRef();
  const desRef = useRef();
  const priceRef = useRef();
  const warrantyRef = useRef();
  const piclinkRef = useRef("");

  const handleAddUser = (e) => {
    const Name = nameRef.current.value;
    const des = desRef.current.value;
    const price = priceRef.current.value;
    const warranty = warrantyRef.current.value;
    const piclink = piclinkRef.current.value;
    const newProduct = { Name, des, price, warranty,piclink };
    console.log(newProduct);

    fetch(`http://localhost:5000/manageProducts/${productId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("successfully update new product");
          e.target.reset();
        } else {
          alert("failed to update product");
          e.target.reset();
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <div className="container">
        <h4 className="text-center">Update Product Information</h4>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 shadow">
            <Form onSubmit={handleAddUser}>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="Text"
                  placeholder="name@example.com"
                  ref={nameRef}
                  defaultValue={singleOrder?.Name}
                  required
                />
                <label htmlFor="floatingInputCustom">
                  Write your Product Name
                </label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="text"
                  ref={desRef}
                  defaultValue={singleOrder?.des}
                  required
                />
                <label htmlFor="floatingPasswordCustom">
                  Describe something about your product{" "}
                </label>
              </Form.Floating>

              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="number"
                  placeholder="text"
                  ref={priceRef}
                  required
                  min="999"
                  defaultValue={singleOrder?.price}
                />
                <label htmlFor="floatingPasswordCustom">
                  Write your Product price{" "}
                </label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="text"
                  placeholder="text"
                  defaultValue={singleOrder?.warranty}
                  ref={warrantyRef}
                />
                <label htmlFor="floatingPasswordCustom">
                  Write your Product warranty time{" "}
                </label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="text"
                  placeholder="text"
                  ref={piclinkRef}
                  defaultValue={singleOrder?.piclink}
                />
                <label htmlFor="floatingPasswordCustom">
                  Please given your product picture link{" "}
                </label>
              </Form.Floating>

              <input
                to="/addProduct"
                type="submit"
                value="Submit"
                className="btn btn-primary btn-organization p-3 w-100 mb-3"
              />
            </Form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};
export default UpdateOrder;
