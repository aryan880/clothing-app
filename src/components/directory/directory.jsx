import React from 'react'
import MenuItem from "../menu-item/menu-item.jsx"
import "./directory.scss"


function Directory() {
    const section =[{
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: ''
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: ''
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: ''
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: ''
    }]
  return (
    <div>
      <div className = "directory-menu">
        {section.map(function(menuItem){
          return <MenuItem key = {menuItem.id} title = {menuItem.title} imageUrl = {menuItem.imageUrl} size = {menuItem.size} linkUrl = {menuItem.linkUrl}/>
        })}
      </div>
    </div>
  )
}

export default Directory;


