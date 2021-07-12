import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import {Home} from './pages/Home';
import {Signin} from './pages/Signin'


function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/signin" render={ () => <Signin/>}/>
        <Route path="/" render={ () => <Home/>}/>
      </Switch>
    
    </div>
  );
}

export default App;
