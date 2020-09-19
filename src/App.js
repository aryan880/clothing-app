import React from 'react';
import './App.css';
import {Route,Switch} from "react-router-dom"
import Homepage from './pages/homepage/homepage.jsx';

function HatsPage(props){
  console.log(props);
  return (<div>
    <h1>HATS PAGE</h1>
  </div>
  );
} 
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ="/" component ={Homepage} />
        <Route path ="/hats" component ={HatsPage} />  
      </Switch>
    </div>
  );
}

export default App;
