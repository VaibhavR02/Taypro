import React from 'react';
import '../styles/alltickets.css';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const AllTickets = () => {
  return (
    <>
      <Row className="top1 container2">
        <Col className="col">
          <Form className="form ">
            <InputGroup>
              <FormControl
                type="text"
                name="q"
                id="q"
                className="input"
                placeholder="search Ticket..."
                aria-label="Search Products"
                aria-describedby="button-search"
              ></FormControl>
              <Button className="search" type="submit" id="button-search">
                <i className="fas fa-search"></i>
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>

      <div className="top container">
        <table className="table table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col text-center">Sr No</th>
              <th scope="col text-center">Ticket No.</th>
              <th scope="col text-center">Robot No.</th>
              <th scope="col text-center">Major Issue</th>
              <th scope="col text-center">Problem Solved</th>
              <th scope="col text-center">Open Date</th>
              <th scope="col text-center">Closed date </th>
              <th scope="col text-center">Status</th>
              <th scope="col ">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>123456789</td>
              <td>1234taypro</td>
              <td>coupling</td>
              <td>YES</td>
              <td>09/03/2023</td>
              <td>11/03/2023</td>
              <td>Pending</td>
              <td className="action">
                <button
                  className=" m-1 btn btn-success btn-sm  details-btn"
                  type="button"
                >
                  <FaRegEdit className="edit" />
                </button>
                &nbsp;
                <button
                  className="m-1 btn btn-danger btn-sm delete-btn"
                  type="button"
                  variant="light"
                >
                  <MdDeleteOutline className="delete" />
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>123456789</td>
              <td>1234taypro</td>
              <td>coupling</td>
              <td>YES</td>
              <td>09/03/2023</td>
              <td>11/03/2023</td>
              <td>Pending</td>
              <td className="action">
                <button
                  className=" m-1 btn btn-success btn-sm  details-btn"
                  type="button"
                >
                  <FaRegEdit className="edit" />
                </button>
                &nbsp;
                <button
                  className="m-1 btn btn-danger btn-sm delete-btn"
                  type="button"
                  variant="light"
                >
                  <MdDeleteOutline className="delete" />
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>123456789</td>
              <td>1234taypro</td>
              <td>coupling</td>
              <td>YES</td>
              <td>09/03/2023</td>
              <td>11/03/2023</td>
              <td>Pending</td>
              <td className="action">
                <button
                  className=" m-1 btn btn-success btn-sm  details-btn"
                  type="button"
                >
                  <FaRegEdit className="edit" />
                </button>
                &nbsp;
                <button
                  className="m-1 btn btn-danger btn-sm delete-btn"
                  type="button"
                  variant="light"
                >
                  <MdDeleteOutline className="delete" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllTickets;
