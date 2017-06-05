import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import LineChart from './components/lineChart';
import Map from './components/map';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/lineChart" component={LineChart}/>
          <Route path="/map" component={Map}/>
        </div>
      </Router>
    );
  }
}

export default App;
