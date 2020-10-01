import React from "react";



function EmployeeRow(props){
  console.log(props.employee)

        return(
          <tbody >
            <tr >
            <th scope="row"> <img src = {props.employee.image} alt=""/></th>
            <th >{props.employee.name}</th>
            <th > {props.employee.Email}</th>
            <th > {props.employee.phone}</th>
            <th > {props.employee.DOB}</th>
            <th > {props.employee.department}</th>
            <th > {props.employee.title}</th>
            </tr>

          </tbody>
       
          
        )
    


}

export default EmployeeRow;