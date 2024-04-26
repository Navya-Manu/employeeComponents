import React from 'react'
import './EmployeeHome.css'
import { Link } from 'react-router-dom';
function EmployeeHome() {
  return (
    <div>
      <body class="ehomebody">
 
 <div class="header"><strong>Capstone GDS</strong>
 <div class="button-group">
  <Link to="/request">
     <button class="button" > Expense History</button>
     </Link>
   </div>

 </div>
  
 <div class="main-content">
   <p class="welcome-message"><strong>Welcome Employee!</strong></p>
   <h2 class="emptext">This is the space where you can get approval for your monthly expenses from your manager</h2>
     <span class="additional-text"><h3>Expense exceeding the limit will not be approved!</h3></span>
   {/* <div class="button-group">
     <button class="button" onclick="location.href='my-expense.html'"><strong>Add Expenses</strong></button>
    
   </div> */}
 </div>
  
 </body>
      
    </div>
  )
}

export default EmployeeHome;
