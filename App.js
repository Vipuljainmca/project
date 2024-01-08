import "./App.css";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Dash from "./Components/Dash";

function App() {

  


  const [isLoggedIn, setIsLoggedIn] = useState('');
  return (
    <div >
      
      <Routes>

        <Route
          path="/"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route  path="/das" element={<Dash isLoggedIn={isLoggedIn} />}/>

      </Routes>
      {isLoggedIn===false && <div><p>you enter incorrect detail</p></div>}
    </div>
  );
}

export default App;
