import logo from './logo.svg';
import './App.css';
import NavBar from './componnet/Nav';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Landing from './componnet/Landing';
import Footer from './componnet/Footer';
import Home from './componnet/Home';
import QuesionDetail from './componnet/QuesionDetail';
import AskQuestion from './componnet/AskQuestion';

function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<Landing   />}/>
        <Route path='/home' element={ <> <Home/></>}/>
        <Route path='/questionDetail' element={<QuesionDetail/>}/>
        <Route path='/askquestion' element={<AskQuestion/>}/>
     
     </Routes>
    </Router>
    </div>
    
  );
}

export default App;
