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

  function handleSort(category) {
    function compare(a, b) {
      // Use toUpperCase() to ignore character casing
      const categoryA = a[category].toUpperCase();
      const categoryB = b[category].toUpperCase();
      let comparison = 0;
      if (categoryA > categoryB) {
        comparison = 1;
      } else if (categoryA < categoryB) {
        comparison = -1;
      }
      return comparison;
    }
    employees.sort(compare);
    console.log(employees);
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>
            <a
              href="#"
              onClick={() => {
                handleSort("name");
              }}
            >
              Name
            </a>
          </th>
          <th>
            <a
              href="#"
              onClick={() => {
                handleSort("occupation");
              }}
            >
              Occupation
            </a>
          </th>
          <th>
            <a
              href="#"
              onClick={() => {
                handleSort("location");
              }}
            >
              Location
            </a>
          </th>
        </tr>
      </thead>
      <tbody>{employees.map(renderDirectory)}</tbody>
    </Table>
  );
}

export default TableDirectory;
