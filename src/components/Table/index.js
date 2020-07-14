import React from "react";
import employees from "../../directory.json";
import { Table } from "react-bootstrap";

function TableDirectory() {
  const renderDirectory = (employee, index) => (
    <tr key={index}>
      <td> {employee.name} </td>
      <td> {employee.occupation} </td>
      <td> {employee.location} </td>
    </tr>
  );

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Occupation</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>{employees.map(renderDirectory)}</tbody>
    </Table>
  );
}

export default TableDirectory;
