import React from 'react';
import TodoList from './Components/TodoList';
import Pedia from './Components/Pedia';
import Stack from './Components/Stack';
import HunterView from './Views/HunterView';
import BattleView from './Views/BattleView';
import Rock from './Components/Rock';
import Navigation from './Components/Navigation';
import Nav from './Components/Nav';
import Calc from './Components/Calc';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBlind, faCode } from '@fortawesome/free-solid-svg-icons'




function App() {
  library.add(faBlind, faCode);
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
            <Route path="/rock">
              <Rock/>
            </Route>
            <Route path="/calc">
              <Calc/>
            </Route>
            <Route path='/battle'>
              <BattleView/>
            </Route>
          </Switch>

        </div>
        <Nav/>
      </Router>
    </div>
  );
}

export default App;
