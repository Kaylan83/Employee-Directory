import React from "react";
import EmployeeRow from "../EmployeeRow/EmployeeRow";
import employees from "../data/employees.json";
import tableColumns from "../data/tableColumns.json"
import Search from "../SearchForm/SearchForm"
import { MDBDataTable } from 'mdbreact';




const Table = () => {
  const data = {
    columns: tableColumns ,
    rows:employees
  };

  const employee = employees.map((employee) => <EmployeeRow key = {employee.id} employee = {employee}/>)
  return (
    <div className = "container-fluid">
      <MDBDataTable
       striped
      bordered
      large
      data={data}
      hover
           
    />

    {/* <Search/>
    <table className = "table table-bordered table-striped table-dark">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>D.O.B</th>
          <th>Department</th>
          <th>Title</th>
        </tr>
      </thead>
      {employee}
    </table> */}

    </div>

  );
}



export default Table;