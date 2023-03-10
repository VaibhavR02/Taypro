import React, { useEffect, useState } from 'react';
import '../styles/alltickets.css';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

const AllTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/tickets');
      setTickets(result.data);
    };
    fetchData();
  }, []);
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

              <th scope="col " className="text-center">
                Site Name
              </th>
              <th scope="col" className="text-center">
                Ticket No.
              </th>
              <th scope="col" className="text-center">
                Robot No.
              </th>
              <th scope="col" className="text-center">
                Major Issue
              </th>
              <th scope="col" className="text-center">
                Problem Solved
              </th>
              <th scope="col" className="text-center">
                Open Date
              </th>
              <th scope="col" className="text-center">
                Closed date{' '}
              </th>
              <th scope="col" className="text-center">
                Status
              </th>
              <th scope="col " className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.ticketId}>
                <th scope="row" className="text-center">
                  {ticket.ticketId}
                </th>

                <td className="text-center">{ticket.siteName}</td>
                <td className="text-center">{ticket.ticketId}</td>
                <td className="text-center">{ticket.robotId}</td>
                <td className="text-center">{ticket.fault}</td>
                <td className="text-center">{ticket.problemSolved}</td>
                <td className="text-center">{ticket.openDate}</td>
                <td className="text-center">{ticket.closedDate}</td>
                <td className="text-center">{ticket.status}</td>

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
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllTickets;
