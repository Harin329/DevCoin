import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Splash from './screens/Splash';
import Home from './screens/Home';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {!user
        && Splash()}
      {user &&
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      }
    </div>
  );
}

export default App;
