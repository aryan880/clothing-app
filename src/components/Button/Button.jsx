import React from 'react'
import "./Button.scss"

function Button({children,isGoogleSignIn,type,onClick}) {
  return (
    <button className = {"custom-button " + (isGoogleSignIn ? "google-sign-in" : "")} type = {type} onClick = {onClick}>
      {children}
    </button>
  )
}

export default Button
