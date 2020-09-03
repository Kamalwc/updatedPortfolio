import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './components/Landing'
import Projects from './components/Projects'
import Header from './common/Header'
const background = {
  background: `rgb(2,0,36)`,
  background: `linear-gradient(90deg, rgba(2,0,36,1) 43%, rgba(10,69,167,1) 100%)`
}


function App() {
  return (
    <Router>
      <div style={background}>
        <Header/>
        <Route exact path="/" component = {Landing} />
        <Route exact path="/projects" component = {Projects} />
      </div>
    </Router>
  );
}

export default App;
