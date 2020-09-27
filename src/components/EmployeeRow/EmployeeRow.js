import React from "react";



function EmployeeRow(props){
  console.log(props)

        return(
          <tbody>
            <tr>
            <th scope="row"> <img src = {props.image}/></th>
            <th >{props.name}</th>
            <th > {props.Email}</th>
            <th > {props.phone}</th>
            <th > {props.DOB}</th>
            <th > {props.department}</th>
            <th > {props.title}</th>
            </tr>

          </tbody>
       
          
        )
    


}

export default EmployeeRow;