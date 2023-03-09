import React from 'react';
import '../styles/ticket.css';
const Ticket = () => {
  return (
    <>
      <div className="ticket mt-5">
        <h1>Hello User</h1>
        <form>
          <div className="my-4">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>Select the Site</option>
              <option value="1">A</option>
              <option value="2">B</option>
              <option value="3">C</option>
              <option value="3">D</option>
              <option value="3">E</option>
              <option value="3">F</option>
            </select>
          </div>
          <div className="mb-1">
            <label className="form-label">Enter Plot No.</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-1">
            <label className="form-label">Enter Block No.</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Enter Robot No
            </label>
            <input type="password" className="form-control" />
          </div>

          <div className="my-4">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>Select the Robot</option>
              <option value="1">1111</option>
              <option value="2">222</option>
              <option value="3">333</option>
            </select>
          </div>

          <div className="my-4">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>Select a Fault</option>
              <option value="1">Coupling Issue</option>
              <option value="2">Supporting issue</option>
              <option value="3">333</option>
              <option value="4">Any other</option>
            </select>
          </div>

          {/* if selected any other */}
          <div className="mb-1">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Specify isssue
            </label>
            <textarea type="text" className="form-control" />
          </div>

          <div className="my-4">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>Problem resolved</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
          </div>

          {/* if yes */}
          <div className="my-4">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>Parts Changed</option>
              <option value="1">coupling</option>
              <option value="2">motor</option>
            </select>
          </div>

          <div className="mb-1">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Please Specify issue in detail
            </label>
            <textarea type="text" className="form-control" />
          </div>

          <div className="mb-1">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Please upload image
            </label>
            <input type="file" className="form-control" />
          </div>

          <button type="submit" className="btn btn2 w-100 btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Ticket;
