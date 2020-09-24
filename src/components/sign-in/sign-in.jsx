import React, { useState } from 'react'
import { signInWithGoogle } from '../../firebsase/firebaseUtils';
import Button from '../Button/Button';
import FormInput from '../form-input/form-input';
import "./sign-in.scss"

function SignIn() {
  const [state,setState] = useState({
    email:"",
    password:""
  });
  function handleSubmit(event){
    event.preventDefault();
    setState({
      email:"",
      password:""
    })
  }
  function handleChange(e){
    const {name,value} = e.target;
    setState({
      [name]:value
    })
  }
  return (
    <div className = "sign-in">
      <h2>I already have an account</h2>
      <span className = "title">Sign in with you email and password</span>
      <form onSubmit = {handleSubmit}>
        <FormInput name = "email" type = "email" value = {state.email} handleChange = {handleChange} label = "Email" required/>
        <FormInput name = "password" type = "password" value = {state.password} handleChange = {handleChange} label = "Password" required/>
        <div className = "buttons">
          <Button type = "submit">Sign in</Button>
          <Button type = "button" onClick = {signInWithGoogle} isGoogleSignIn >Sign in with google</Button>
        </div> 
      </form>
    </div>
  )
}

export default SignIn;
