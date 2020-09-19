import React from 'react'
import PreviewCollection from '../preview-collection/preview-collection';
import SHOP_DATA from "./shop.data"

function Shop() {
  const category_data = SHOP_DATA;
  return (
    <div className = "shop-page">
    {
      category_data.map(function(category){
        return <PreviewCollection key={category.id} title = {category.title} items = {category.items}/>
      })
    }
    </div>
  )
}

export default Shop;
