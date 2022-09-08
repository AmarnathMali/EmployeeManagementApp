import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService';

const ViewEmployeeComponent = () => {

    const [employee, setEmployee] = useState({
        id:"",
        firstName:"",
        lastName:"",
        emailId:""
    });

    const {id} = useParams();
    useEffect(()=>{
        loadEmployee();
    },[]);

    const loadEmployee = () =>{
             EmployeeService.getEmployeeById(id).then((response)=>{
                console.log(response.data);
                setEmployee(response.data);
            });
                
    
           
    };
  return (
    <div>
        <br></br>
        <br></br>
        <div className='card' >
        <ul className='list-group'>
            <li className='list-group-item'>id: {employee.id}</li>
            <li className='list-group-item'>firstName: {employee.firstName}</li>
            <li className='list-group-item'>lastName: {employee.lastName}</li>
            <li className='list-group-item'>emailId: {employee.emailId}</li>
            <Link to="/" className='btn btn-primary '>back</Link>
        </ul>
        
        </div>
    </div>
    
  )
}

export default ViewEmployeeComponent