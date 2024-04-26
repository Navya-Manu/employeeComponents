import React from 'react'
import LoginHeader from './LoginHeader';
import Footer from './Footer';
import axios from 'axios';
import { useState } from 'react';

function ExpenseForm() {
    const [expenseType,setExpenseType]=useState('');
    const[reason,setReason]=useState('');
    const[amount,setAmount]=useState('');
    const[medical,setMedical]=useState(5000);
    const[travel,setTravel]=useState(6000);
    const[internet,setInternet]=useState(7000);

    const handleSubmit=async () => {
        //e.preventDefault();

        const employeeId=sessionStorage.getItem('id');
        console.log(employeeId);
        const role=sessionStorage.getItem('role');
        console.log(role);

        try{
            const response=await axios.post('http://localhost:8085/api/expense/postall',{
                 amount,employeeId,expenseType,reason,role,
                status:'pending'
            });
            
            handleSubmitTwo();
        }catch(error){
            console.error('error posting expense',error)
        }
    };

    const handleSubmitTwo=async () => {
       // e.preventDefault();
        const employeeId=sessionStorage.getItem('id');

        try{
            const response=await axios.post('https://localhost:8085/api/expensedetails/all',{
               employeeId,medical,travel,internet 
            });
        }catch(error){
            console.error('error in posting',error);
        }


    };


  return (
    <div>
    {/* <LoginHeader></LoginHeader> */}
    <div className='container'>
        <div className='row'>
            <div className='card'>
                <h2 className='text-center'>Request Expense</h2>
                <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                        {/* <div className='form-group mb-2'>
                    
                    </div> */}

                    <div className='form-group mb-2'>
                    <label className='form-label'>type : </label>
                   <select id="expensetype" name="expensetype" value={expenseType} onChange={(e) => 
                   setExpenseType(e.target.value)} required>
                    <option value="">Select</option>

                   <option value="medical">Medical</option>

                   <option value="travel">Travel</option>

                    <option value="internet">Internet</option>

                   </select>
                    </div>

                      <div className='form-group mb-2'>
                        <label className='form-label'>Reason:</label>
                        <input type='text'
                        placeholder='Please Enter The reason'
                        name='reason'
                        value={reason}
                        className='form-control'
                        onChange={(e)=> setReason(e.target.value)}>
                        </input>
                    
                    </div> 
                    <div className='form-group mb-2'>
                        <label className='form-label'>Amount:</label>
                        <input type='number'
                        placeholder='Please Enter The Amount'
                        name='amount'
                        value={amount}
                        className='form-control'
                        onChange={(e)=> setAmount(e.target.value)}>
                        </input>
                    
                    </div> 



                    </form>
                    <button className='btn btn-success' onClick={handleSubmit}>submit</button>
                </div>
            </div>
        </div>
                
    </div>
    {/* <Footer></Footer> */}
</div>
  )

}
export default ExpenseForm;
