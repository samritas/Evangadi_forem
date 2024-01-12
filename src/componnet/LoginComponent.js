import React,{useState} from 'react'
import './Login.css'
import { Link,useNavigate } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useRef } from 'react';
import axios from './axiosConfig'
function LoginComponent() {

  const useremail=useRef(null)
  const userfirstname=useRef(null)
  const userlastname=useRef(null)
  const username=useRef(null)
  const userpassword=useRef()
  // const userfirstname=useRef(null)

   const [showPassword, setShowPassword] = useState(false);
    const [isCreateAccountFormVisible, setCreateAccountFormVisible] = useState(true);

  const toggleForm = () => {
    setCreateAccountFormVisible(!isCreateAccountFormVisible);
  };

  const reversLoginForm=()=>{
    setCreateAccountFormVisible(!isCreateAccountFormVisible)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const navigate=useNavigate()

  
  const handleRegister = async (e) => {
  
    e.preventDefault();
//     // navigate("/home")

const usernamevalue=username.current.value
const useremailvalue=useremail.current.value
const userfirsnamevalue=userfirstname.current.value
const userlastnamevalue=userlastname.current.value
const userpasswordvalue=userpassword.current.value

if (
  !userfirstname||
  !useremailvalue||
  !userlastnamevalue||
  !userpasswordvalue||
  !usernamevalue
){
  alert("please provide all requirement")
  return
}

try {
  await axios.post('/users/register',{
    username:usernamevalue,
    firstname:userfirsnamevalue,
    lastname:userlastnamevalue,
    password:userpasswordvalue,
    email:useremailvalue
  
  });
  alert("sign up siccefully")
  navigate("/home")
  // Handle the response if needed
  
} catch (error) {
  // Handle the error
  console.error('Error:', error.response);
console.log('hello')
  
}

  };
  

// login

 
const handleLogin = async (e) => {
  
  e.preventDefault();
//     // navigate("/home")

const useremailvalue=useremail.current.value
const userpasswordvalue=userpassword.current.value

if (!useremailvalue||!userpasswordvalue){
alert("please provide all requirement")
return
}

try {
const {data} = await axios.post('/users/login',{
  password:userpasswordvalue,
  email:useremailvalue

});
alert("login siccefully")
navigate("/home")
localStorage.setItem("tocken",data.token)
// Handle the response if needed

} catch (error) {
// Handle the error
console.error('Error:', error);
alert("check your email or password")
}

};










  
  return (
    <div >
      {/* login form */}
         {isCreateAccountFormVisible ? (
      <div className="login-container">
      <h3>Login to your account</h3>
      <p className="create-account-text">
        Do you have an account?<Link onClick={toggleForm}>Create a new account</Link>
      </p>

      <form className="login-form"  onSubmit={handleLogin}>
        <input type="email" id="email" name="email" placeholder="Email"  ref={useremail} required />
        
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          name="password"
          placeholder="Enter your password"
          ref={userpassword}
          required
        
        />
     
        <button   className='button' type="submit">Submit</button>
      </form>

      <p className="create-account-link" onClick={toggleForm}>
      <Link >Create an account</Link>
       
      </p>
    </div>):  //register form
   ( <div className="login-container">
   <h3>Joni The Nework</h3>
   <p className="create-account-text">
    Already have an account?<Link onClick={reversLoginForm}>sign in</Link>
   </p>
   <form className="login-form" onSubmit={handleRegister}>
     <input type="email" id="email" name="email" placeholder="Email" ref={useremail} required />
     <div className='full_name'>
     <input type="text" id="fristname" name="firstname" placeholder="First name" ref={userfirstname} required />
     <input type="text" id="lastname" name="lastname" placeholder="Last name" ref={ userlastname} required />
     </div>
     <input type="text" id="username" name="username" placeholder="username" ref={ username}required />
     <input type="password" id="password" name="password" placeholder="Password" ref={userpassword} required />
     <button   className='button' type="submit">Agree And Join</button>
   </form>

   <p onClick={toggleForm}>
    I agree to the <Link>privecy policy</Link> and<Link> term of service</Link>
    <br/>
         <Link style={{paddingTop:"10px"}}>Already have an account</Link>
    
   </p>
   
 </div>
)}




    </div>
  )
}

export default LoginComponent
