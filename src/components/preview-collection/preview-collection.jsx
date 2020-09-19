import React from 'react'
import CollectionItems from '../collection-items/collection-items'
import "./preview-collection.scss"

function PreviewCollection({title,items}) {
  return (
    <div className = "collection-preview">
      <h1 className = "title">{title.toUpperCase()}</h1>
      <div className = "preview">
        {
          items
          .filter(function(item,index){return index < 4})
          .map(function(item){
            return <CollectionItems key={item.id} id = {item.id} name = {item.name} price = {item.price} imageUrl = {item.imageUrl}></CollectionItems>
          })
        }
      </div>
    </div>
  )
}

export default PreviewCollection;
