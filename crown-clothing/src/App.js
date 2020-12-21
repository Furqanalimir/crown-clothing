import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage.component';

const HatsPage = () =>(
  <div>
    <h1> HatsPage </h1>
  </div>
)
function App() {
  return (
    <div>
  <switch > 
    <Route exact path="/" component={HomePage} />
    <Route  path="/shop/hats" component={HatsPage} />
  </switch>
    </div>
  );
}

export default App;
