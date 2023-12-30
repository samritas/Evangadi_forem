import React,{useState} from 'react'
import './Login.css'
import { Link,useNavigate } from 'react-router-dom'
function LoginComponent() {

    const [showPassword, setShowPassword] = useState(false);
    const [isCreateAccountFormVisible, setCreateAccountFormVisible] = useState(true);

  const toggleForm = () => {
    setCreateAccountFormVisible(!isCreateAccountFormVisible);
  };
  const reversLoginForm=()=>{
    setCreateAccountFormVisible(!isCreateAccountFormVisible)
  }

    const handlePassword=()=>{
      setShowPassword("true")
    }

  const navigate=useNavigate()


  const handlesubmit=(e)=>{
    e.preventDefault();
    navigate("/home")

  }
  return (
    <div >
         {isCreateAccountFormVisible ? (
      <div className="login-container">
      <h3>Login to your account</h3>
      <p className="create-account-text">
        Do you have an account?<Link onClick={toggleForm}>Create a new account</Link>
      </p>
      <form className="login-form" onSubmit={handlesubmit}>
        <input type="email" id="email" name="email" placeholder="Email" required />
        <input type="password" id="password" name="password" placeholder="Password" required />
        <button   className='button' type="submit">Submit</button>
      </form>

      <p className="create-account-link" onClick={toggleForm}>
      <Link >Create an account</Link>
       
      </p>
    </div>):
   ( <div className="login-container">
   <h3>Joni The Nework</h3>
   <p className="create-account-text">
    Already have an account?<Link onClick={reversLoginForm}>sign in</Link>
   </p>
   <form className="login-form" onSubmit={handlesubmit}>
     <input type="email" id="email" name="email" placeholder="Email" required />
     <div className='full_name'>
     <input type="text" id="fristname" name="firstname" placeholder="First name" required />
     <input type="text" id="lastname" name="lastname" placeholder="Last name" required />
     </div>
     <input type="text" id="username" name="username" placeholder="username" required />
     <input type="password" id="password" name="password" placeholder="Password" required />
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
