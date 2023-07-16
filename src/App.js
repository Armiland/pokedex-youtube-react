import React, { Component } from 'react';
import { HashRouter as Router, Routes, Route, Switch}
from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon';

import backgroundImage from '../src/components/pattern.png';

class App extends Component {
  render() {
  return (
    <Router>
    <div className="App" style={{background: `url(${backgroundImage})`}}>
      <NavBar />
      <div className="container">
        <switch>
         <Routes><Route exact path="/" Component={Dashboard} />
          <Route exact path="/pokemon/:pokemonIndex" Component={Pokemon} />
       </Routes> </switch>
        <Dashboard />
        
        </div>
    </div>
    </Router>
  );
}
}

export default App;
