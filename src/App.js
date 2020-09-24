import React,{useState,useEffect} from 'react';
import './App.css';
import {Route,Switch} from "react-router-dom"
import Homepage from './pages/homepage/homepage.jsx';
import ShopPage from "./pages/shop/shop.jsx"
import Header from './components/header/header.jsx';
import SignInAndSingUp from './pages/sign-in-and-sign-out/sign-in-and-sing-up.jsx';
import { auth } from "./firebsase/firebaseUtils.js";


function App() {
  const [user,setUser] = useState({currentUser:null});
  useEffect(function(){
    auth.onAuthStateChanged(function(usr){
      setUser({
        currentUser:usr
      }) 
    });
  },[]);
  console.log(user);

  return (
    <div className="App">
      <Header currentUser = {user.currentUser}/>
      <Switch>
        <Route exact path ="/" component ={Homepage} />
        <Route path ="/shop" component ={ShopPage} />  
        <Route path ="/signin" component ={SignInAndSingUp} />  
      </Switch>
    </div>
  );
}

export default App;
