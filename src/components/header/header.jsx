import React from 'react';
import "./header.scss";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg"
import { auth } from '../../firebsase/firebaseUtils.js';

function Header({currentUser}) {
  return (
    <div className = "header">
      <Link  className = "logo-container" to="/">
        <Logo className = "logo" />
      </Link>
      <div className = "options">
        <Link className = "option" to = "/shop">
          SHOP
        </Link>
        <Link className = "option" to="/shop" >
          CONTACT
        </Link>
        {
          currentUser ?
          <div className = "option" onClick = {function(){
            auth.signOut()
          }}>
            SIGN OUT
          </div>:
          <Link className = "option" to = "/signin">
            SIGN IN
          </Link>
        }
      </div>
    </div>
  )
}

export default Header;
