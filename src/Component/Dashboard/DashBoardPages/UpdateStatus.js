import React from "react";
import { useRef } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UpdateStatus = () => {

  let { statusId } = useParams();
  console.log(statusId);

  const statusDate = useRef();
  const lastStatus = useRef();
  const vehicleName = useRef();
  const siNo = useRef();

  const handleAddUser = e => {

    const date = statusDate.current.value;
    const last = lastStatus.current.value;
    const vehicle = vehicleName.current.value;
    const si = siNo.current.value;

    const updateInfo = { date, last, vehicle, si }



    fetch(`http://localhost:5000/status/${statusId}`, {

      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },

      body: JSON.stringify(updateInfo)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {

          alert('successfully complete Update');
          e.target.reset();
        }


      })
    e.preventDefault();
  }
  return (
    <div>


      <div className="container">
        <h4 className="text-center">Update product Status </h4>
        <div className="row">

          <div className="col-md-4"></div>
          <div className="col-md-4 shadow">
            <Form onSubmit={handleAddUser}>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="date"
                  placeholder="status Date"
                  ref={statusDate}
                  required
                />
                <label htmlFor="floatingInputCustom"> Status Date </label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="text"
                  placeholder="Last Status"
                  ref={lastStatus}
                  required
                />
                <label htmlFor="floatingPasswordCustom">Last Status</label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="text"
                  placeholder="Vehicle Name"
                  ref={vehicleName}
                  required
                />
                <label htmlFor="floatingPasswordCustom">Vehicle Name</label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="text"
                  placeholder="Si no "
                  ref={siNo}
                  required
                />
                <label htmlFor="floatingPasswordCustom">Si No</label>
              </Form.Floating>

              <input type="submit" value="Update" className="btn btn-primary btn-organization p-3 w-100 mb-3 bookbtn" />
            </Form>

          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div >
  );





};
export default UpdateStatus;
