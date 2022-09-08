import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import EmployeeService from '../Services/EmployeeService'

const ListEmployeecomponent = () => {
  const [employees, setEmployees] = useState([])
  

   useEffect(() => {
     
     getAllEmployees();
     
   }, [])
   
   const getAllEmployees = () =>{

    EmployeeService.getAllEmployees().then((response)=>{
        setEmployees(response.data)
        console.log(response.data);
    }).catch(error=>{
        console.log(error);
    })
   
   }
   

  const deleteEmployee=(employeeId)=>{
    console.log(employeeId);
    EmployeeService.deleteEmployee(employeeId).then((response)=>{
        getAllEmployees();

    }).catch(error=>{
        console.log(error);
    })
  }

  

  return (
    <div className="container ">
        <h2 className="text-center">List of Employees</h2>
        <Link to="/addemployee" className="btn btn-primary mb-2">Add Employee</Link>
        <table className="table table-bordered table-striped mb-5">
            <thead>
                <th>Employee Id</th>
                <th>Employee firstName</th>
                <th>Employee lastName</th>
                <th>Employee EmailId</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    employees.map(
                        employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                            <td>
                             <Link className="btn btn-info" to={`/edit_employee/${employee.id}`}>update</Link>  
                             <button className='btn btn-danger mx-2' onClick={() => deleteEmployee(employee.id)}>Delete</button> 
                             <Link className="btn btn-info" to={`/view_employee/${employee.id}`}>view</Link>  


                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeecomponent