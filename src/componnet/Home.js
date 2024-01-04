import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import './Home.css'
import NavBar from './Nav';
function Home() {

    const iconStyle = {
        fontSize: '56px', // Adjust the size as needed
      };
      const navigate = useNavigate();

      const navigateToQuestionDetail = () => {
        navigate('/questionDetail'); // Replace '/questionDetail' with the actual route of your question detail page
      };

      const navigateToAskquestion = () => {
        navigate('/askquestion'); // Replace '/questionDetail' with the actual route of your question detail page
      };
  return (
    <div>
      <NavBar  isSignIn=""/>
    <div className='home'>
      <div className='centered-container'>
        <div className='askQuestion'>
          <button className='blue-button' onClick={navigateToAskquestion}>Ask Question</button>
          <p>Welcome: user</p>
        </div>
            <p>Questions</p>
            <hr className='horizontal-line' />
        <div className='questions' >
          <div className='username'>
          <AccountCircleIcon style={iconStyle} className='icon user' />
            <p>username</p>
          </div>
          <p>what is react dom?</p>
          <ChevronRightIcon className='icon' onClick={navigateToQuestionDetail} />
        </div>
        
        <hr className='horizontal-line' />
      </div>
    </div>

    </div>
  )
}

export default Home
