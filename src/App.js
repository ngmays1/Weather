import React from 'react';
import TodoList from './Components/TodoList';
import Pedia from './Components/Pedia';
import Stack from './Components/Stack';
import HunterView from './Views/HunterView';
import Rock from './Components/Rock';
import Navigation from './Components/Navigation';
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
            <Route paht="/rock">
              <Rock/>
            </Route>
          </Switch>

        </div>
        <Navigation/>

      </Router>
    </div>
  );
}

export default App;
