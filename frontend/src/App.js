import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Splash from './screens/Splash';
import Home from './screens/Home';

function App() {
  const user = useSelector(state => state.global.user);

  return (
    <div>
      {user.id === ""
        && Splash()}
      {user.id !== "" &&
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      }
    </div>
  );
}

export default App;
