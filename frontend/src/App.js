import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Splash from './screens/Splash';
import Home from './screens/Home';

function App() {
  const user = useSelector(state => state.global.user);

  return (
    <Router>
      <div>
        {console.log(user.id)}
        {user.id ?
            <Routes>
              <Route exact path="/" element={<Home/>} />
            </Routes>
          : 
          <Routes>
            <Route exact path="/" element={<Splash />} />
          </Routes>
        }
      </div>
    </Router>
  );
}

export default App;
