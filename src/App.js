import React from 'react';
import TodoList from './Components/TodoList';
import './App.css';
import Weather from './Components/Weather';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
      <div className="app">
        <Route exact path="/">
          <Weather/>
        </Route>
        <Route path='/todo'>
          <TodoList/>
        </Route>
        </div>
    </Switch>
    </Router>
  );
}

export default App;
