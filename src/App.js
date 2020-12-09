import React from 'react';
import TodoList from './Components/TodoList';
import Pedia from './Components/Pedia';
import Stack from './Components/Stack';
import HunterView from './Views/HunterView';
import './App.css';
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HunterCard from './Views/HunterView';



function App() {

  return (
    <div className="app">
      <Router>

        <div>
          <Switch>
            <Route exact path="/">
              <TodoList/>
            </Route>
            <Route path="/stack">
              <Stack/>
            </Route>
            <Route path="/hunter/:index">
              <HunterView/>
            </Route>
            <Route exact path="/hunter/">
              <Pedia/>
            </Route>
          </Switch>

        </div>

      </Router>
    </div>
  );
}

export default App;
