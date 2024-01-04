import React from 'react'
import './quesionDetail.css'
import NavBar from './Nav'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function QuesionDetail() {

  const iconStyle = {
    fontSize: '56px', // Adjust the size as needed
  };

  return (
    <div>
      <NavBar  isSignIn=""/> 
      <div className='quesionDetail'>
   <div className='community_answer'>
     <h2> Question</h2>
     <h3>What's React Router Dom?</h3>
     <p className='question_decription'> how it works</p>
     <hr className='horizontal-line '/>
     <h1>Answer From The Community</h1>
     <div className='TheAnswer'>
     
     <div className='username'>
          <AccountCircleIcon style={iconStyle} className='icon user' />
            <p>username</p>
      </div>
      <p>it is used for routing purpose</p>
     </div>
     </div> 
    

     <div className='answer_section'>
      <div className='answer'>
       <h1>Answer The Top Question</h1>
       <p>Go to question page</p>
       </div>
       <div className='form-container'>
      <input type="text" className="wide-input" placeholder="Your answer..." />
      <button className="post-button">Post Your Answer</button>
    </div>
     </div>
     </div>
    </div>
  )
}

export default QuesionDetail
