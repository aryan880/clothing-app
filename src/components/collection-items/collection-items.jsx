import React from 'react'
import "./collection-items.scss"

function CollectionItems({id,name,price,imageUrl}) {
  return (
    <div className = "collection-items">
      <div className = "image" style = {{backgroundImage : "url("+imageUrl +")"}}/>
      <div className = "collection-footer">
        <span className = "name">{name}</span>
        <span className = "price">{price}</span>
      </div>
    </div>
  )
}

export default CollectionItems;
