import React from 'react'
import "./form-input.scss"

function FormInput({value,handleChange,label,required,name}) {
  return (
    <div className = "group">
      <input className = "form-input" onChange = {handleChange} name = {name} value = {value} required = {required}/>
        {label ? 
        (<label className = {{value}.length ? "shrink":"" + " form-input-label"} >
          {label}
        </label>)
        :null
      }
    </div>
  )
}

export default FormInput;
