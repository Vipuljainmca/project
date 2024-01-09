import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Dashborad from './components/Dashborad';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isLogin, setIsLogin] = useState('')
  
  

  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home setIsLogin={setIsLogin} />}/>
        <Route path='/dashboard' element={ <PrivateRoute isLogin={isLogin}>
        <Dashborad/>
        </PrivateRoute>
        }/>
      </Routes>

      { isLogin===false && <div> <h3 style={{color:'red',}}>Your Entered wrong email or password !!</h3> </div> }
    
    </div>
  );
}

export default App;
