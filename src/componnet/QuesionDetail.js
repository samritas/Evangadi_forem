import React from 'react'
import './quesionDetail.css'
import NavBar from './Nav'
function QuesionDetail() {
  return (
    <div>
      <NavBar  isSignIn=""/> 
      <div className='quesionDetail'>
     <h2> Question</h2>
     <h3>What's React Router Dom?</h3>
     <p>how it works</p>
     </div>

    </div>
  )
}

export default QuesionDetail
