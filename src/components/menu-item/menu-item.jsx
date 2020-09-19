import React from 'react';
import "./menu-items.scss";
import { withRouter } from "react-router-dom";

function MenuItem({title,imageUrl,size,history,linkUrl,match}) { 
  return (
    <div className = {"menu-item " + size} onClick = {function(){history.push(match.url + linkUrl)}}>
      <div
        className = "background-image"
        style = {{
        backgroundImage : "url("+imageUrl+")"
        }}
      />
      <div className ="content">
        <h1 className = "title">{title.toUpperCase()}</h1>
        <span className ="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem);
