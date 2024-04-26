import React ,{useState} from 'react'
import axios from 'axios'
//import {useHistory} from 'react-router-dom'
import './LoginPage.css'

function LoginPage() {
  const [email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  //const history =useHistory();

  const handleSubmit=async (e) =>{
    e.preventDefault();
    try{
      const response=await axios.post('http://localhost:8085/api/employee/login',{email,password});
      const role=response.data.role;
      sessionStorage.setItem("id",response.data.empid)
      sessionStorage.setItem("role",response.data.role)
      console.log(role);
      

      if(role==='employee'){
        window.location.href='./ehome';
        //history.push('/ehome');
      } else if(role === 'manager'){
        window.location.href='./mhome';
       //history.push('/mhome');

      }else{
        alert('role not found');
      }
      }catch(error){
     alert('user not found');
    }

};
  return (
    <div>
        
 
 <div class="header">
   <h1 class="header-title">Capstone GDS</h1>
 </div>
  <body class="loginbody">
 <div class="login-up-container">
   <form onSubmit={handleSubmit}>
     <h2>Login</h2>
     <label for="fullname">email:</label>
     <input type="text" id="fullname" name="fullname" value={email} 
    onChange={(e)=>setEmail(e.target.value)} required />
  
     <label for="password">Password:</label>
     <input type="password" id="password" name="password" value={password}
      onChange={(e)=>setPassword(e.target.value)}
     required/>
  
     {/* <input type="submit" value="Submit"/> */}
     <button type="submit">Login</button>
   </form>
 </div>
  

      </body>
    </div>
  );
}
export default LoginPage;