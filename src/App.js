import DiaryHome from './views/DiaryHome/DiaryHome';
import React from 'react';
import SignIn from './views/SignIn/SignIn';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Route exact path="/home">
            <DiaryHome/>
        </Route>

        <Route exact path="/">
            <SignIn/>
        </Route>
        
      </Router>
    </div>
  );
}

export default App;
