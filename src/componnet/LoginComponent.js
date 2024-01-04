import React,{useState} from 'react'
import './Login.css'
import { Link,useNavigate } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useRef } from 'react';
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


  const handlesubmit=(e)=>{
    e.preventDefault();
    // navigate("/home")
    console.log(useremail.current.value)
    console.log(userfirstname.current.value)
    console.log(userlastname.current.value)
  }

  
  return (
    <div >
      {/* login form */}
         {isCreateAccountFormVisible ? (
      <div className="login-container">
      <h3>Login to your account</h3>
      <p className="create-account-text">
        Do you have an account?<Link onClick={toggleForm}>Create a new account</Link>
      </p>
      <form className="login-form" onSubmit={handlesubmit}>
        <input type="email" id="email" name="email" placeholder="Email"  required />
        <div className='password_section'>
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          name="password"
          placeholder="Enter your password"
          required
        />
        <span id="showPassword" onClick={togglePasswordVisibility}>
          {showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}
        </span>
        </div>
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
   <form className="login-form" onSubmit={handlesubmit}>
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
