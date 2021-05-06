import DiaryHome from './Pages/DiaryHome';
import React from 'react';
import SignIn from './Pages/SignIn';
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
