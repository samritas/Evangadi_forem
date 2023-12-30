import React,{useState} from 'react'
import './Landing.css'
import {Link,useNavigate} from 'react-router-dom'
import LoginComponent from './LoginComponent';
import NavBar from './Nav';
import Footer from './Footer';

function Landing({}) {

  return (
  <div className='landig_page'>
    <NavBar  isSignIn="true"/>
    <div className='landig_content'>
    
        <LoginComponent className='login-container'/>
     
    <div className='about'>
        <h4>About</h4>
        <h1>Evangadi Network Q & A</h1>
        <p>
            No matter what stage of life you are in, whether you’re just starting elementary school or being promoted to CEO of a Fortune 500 company, you have much to offer to those who are trying to follow in your footsteps.</p>
        <p>
        Wheather you are willing to share your knowledge or you are just looking to meet mentors of your own, please start by joining the network here.</p>
        <button className='button_last' >How to work</button>

    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Landing
