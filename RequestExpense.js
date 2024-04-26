import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ExpenseHistory = () =>{
    const[expenseDetails,setExpenseDetails]=useState([]);

    useEffect(() => {

        const empid=sessionStorage.getItem('empid');

        axios.get('http://localhost:8085/api/expense/expense/${empid}')
        .then(response =>{
            setExpenseDetails(response.data)
        })
        .catch(error => {
            console.error('error fetching expense details',error);
        });
    },[])




  return (
    <div>
        <h2>Expense History</h2>
        <table>
            <thead>
                <tr>
                   <th>Expense Id</th>
                   <th>Amount</th>
                   <th>Expense Type</th>
                   <th>Reason</th>
                   <th>Status</th>
                  
                </tr>
            </thead>
            <tbody>
                {expenseDetails.map(expense=>(
                    <tr kry={expense.expenseId}>

                        <td>{expense.amount}</td>
                        <td>{expense.expeseType}</td>
                        <td>{expense.expenseId}</td>
                        <td>{expense.reason}</td>
                        <td>{expense.status}</td>

                    </tr>

                ))}
            </tbody>
        </table>
        <Link to="/newreq">
        <button>
            Add New Request
        </button>


        </Link>
        

      
    </div>
  );
};

export default ExpenseHistory;

