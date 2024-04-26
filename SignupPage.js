import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
 import './SignupPage.css'

const SignupPage=()=>{

    const[formData,setFormData]=useState({
        empName:'',
        password:'',
       
        role:'',
        email:''
        
    
    });
    // this method takes an event e as its parameter (e-event object)
    //setformstate updates form data state
    //handleChange func updates the formdata when user types in the textbox
    const handleChange=(e)=>{
        if(e.target.name==='role')
        {
            setFormData({ ...formData,[e.target.name]:e.target.value});
        }
        else{
        setFormData({ ...formData,[e.target.name]:e.target.value });
        }
    };


    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await fetch('http://localhost:8085/api/employees/signup',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formData)
            });
            if(response.ok){
                window.location.href='./login';
            } else{
                console.error('signup failed');
            }
        } catch(error){
            console.error('Error',error);
        }
    };

    return (
      <div>
      
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
{/* <title>EMS Sign Up</title> */}
{/* <link rel="stylesheet" href="SignupPage.css"> */}
 
<body class="sbody">
        <div>
          <div class="sheader">
            
          <h2>Signup Page</h2>
          <div class>
<h1 class="header-title">Capstone GDS.</h1>

</div>

<div class="sign-up-container">

          <form onSubmit={handleSubmit}>
          <h2>SignUp</h2>
    <label for="fullname">Name</label>
    <input type="text" id="fullname" name="empName" placeholder='Name' value={formData.empName} 
    onChange={handleChange} required/>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" placeholder='password'value={formData.password} 
    onChange={handleChange} required/>
 
    <label for="role">Select Role:</label>
    
    <select id="role" name="role"  value={formData.role} 
    onChange={handleChange}>
        <option value="select">select--</option>
      <option value="employee">Employee</option>
      <option value="manager">Manager</option>


    </select>
    
 
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" value={formData.email} 
    onChange={handleChange} required/>
 
    
 
    {/* <input type="submit" value="Submit"/> */}
            
            <button type="submit">Submit</button>
           
          </form>
          </div>
        </div>
        </div>
        </body>
     
        </div>
      );
    }
     
    export default SignupPage;