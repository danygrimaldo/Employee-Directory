import React from "react";
import DataBody from "./DataBody";

function DataTable({ employees, handleSort }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th
            onClick={() => {
              handleSort(Name.toLowerCase());
            }}
          >
            Name
          </th>
          <th>Occupation</th>
          <th>Location</th>
        </tr>
      </thead>
      <DataBody employees={employees} />
    </Table>
  );
}

export default DataTable;
