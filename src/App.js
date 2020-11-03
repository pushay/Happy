import React from 'react';
import './styles.scss';
import Header from './Layout/Header/Header';
import {BrowserRouter as Router } from 'react-router-dom';
import Routing from './Routing';


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routing/>
      </Router>
    </div>
  );
}

export default App;
