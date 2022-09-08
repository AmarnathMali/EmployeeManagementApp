import React, { useEffect } from 'react'
import { useState } from 'react'
import EmployeeService from '../Services/EmployeeService'
import { Link, useNavigate,useParams } from 'react-router-dom'

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName,setLastName]=useState('')
    const[emailId,setEmailId] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateEmployee=(e)=>{

        e.preventDefault();
        const employee ={firstName,lastName,emailId};

        if(id){
            
            EmployeeService.updateEmployee(id,employee).then((response)=>{
                console.log(response);
                navigate("/employees");

            }).catch(error=>{
                console.log(error);
            })

        }else{
            EmployeeService.createEmployee(employee).then((response)=>{
                console.log(response.data);
                navigate("/employees");
             }).catch(error=>{
               console.log(error);
             })

        }
          

          
    }

    useEffect(()=>{
        EmployeeService.getEmployeeById(id).then((response)=>{
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmailId(response.data.emailId);

        }).catch(error=>{
            console.log(error);
        })
    }, [])

    const heading = () =>{
        if(id){
            return <h2 className='text-center'>update employee</h2>
        }else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }


    return (
    <div className='container'>

        <br></br><br></br>
        <div className='row'>
            <div className='card col-md-6 offset-md-3'>
                {
                    heading()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>FirstName</label>
                            <input type = "text" placeholder='enter first name' name='firstName'
                            className='form-control' value={firstName} onChange={(e)=>setFirstName(e.target.value)}>
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>LastName</label>
                            <input type = "text" placeholder='enter last name' name='lastName'
                            className='form-control' value={lastName} onChange={(e)=>setLastName(e.target.value)}>
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email Id</label>
                            <input type = "text" placeholder='enter email id' name='emailId'
                            className='form-control' value={emailId} onChange={(e)=>setEmailId(e.target.value)}>
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <button className='btn btn-success' onClick={(e)=>saveOrUpdateEmployee(e)}>submit</button>
                            <Link to="/employees" className='btn btn-danger mx-2'>cancel</Link>
                        </div>
                
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmployeeComponent