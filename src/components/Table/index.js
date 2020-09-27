import React from "react";
import EmployeeRow from "../EmployeeRow/EmployeeRow";
import employees from "../../employees.json";
import { MDBDataTable } from 'mdbreact';




const Table = () => {
  const data = {
    columns: [

      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Email',
        field: 'Email',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Department',
        field: 'department',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Title',
        field: 'title',
        sort: 'asc',
        width: 100
      },
      {
        label: 'D.O.B',
        field: 'DOB',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Phone',
        field: 'phone',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Email',
        field: 'Email',
        sort: 'asc',
        width: 100
      }
    ],
    rows:employees
  };

  return (
    <div className = "container-fluid">
      <MDBDataTable
      striped
      bordered
      large
      data={data}
    />
    </div>

  );
}



export default Table;