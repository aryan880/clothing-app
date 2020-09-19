import React from 'react';
import './App.css';
import {Route,Switch} from "react-router-dom"
import Homepage from './pages/homepage/homepage.jsx';
import ShopPage from "./components/shop/shop.jsx"


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ="/" component ={Homepage} />
        <Route path ="/shop" component ={ShopPage} />  
      </Switch>
    </div>
  );
}

export default App;
