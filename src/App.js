import logo from './logo.svg';
import './App.css';
import NavBar from './componnet/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './componnet/Landing';
import Footer from './componnet/Footer';
import Home from './componnet/Home';
import QuesionDetail from './componnet/QuesionDetail';
import AskQuestion from './componnet/AskQuestion';
import axios from './componnet/axiosConfig';
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

function App() {
//   // const navigate = useNavigate();

//   async function checkUser() {
//     try {
//      const {data}= await axios.get("/users/check");
//       // useNavigate("/landing")
//       console.log(data)
//     }
//     catch (error) {
//       console.log(error);
//     }
//   }
//   // checkUser();
  
//   useEffect(() => {
//     // Call your async function
//     checkUser();
//   }, []);

  return (
    <div className='App'>
    <Router  basename="/Evangadi_forem">

        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/questionDetail' element={<QuesionDetail />} />
          <Route path='/askquestion' element={<AskQuestion />} />
        </Routes>

    </Router>
       
       </div>
  );
}

export default App;
