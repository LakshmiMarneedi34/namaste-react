import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from './utils/useRestaurantMenu'
const RestaurantMenu = () => {
const {resId} = useParams()
console.log("params",resId)
    const {restName,menuData} = useRestaurantMenu(resId)
  return (
    <div className='menu'>
        <h1>
           {restName?.card?.card?.text}
        </h1>
        <h2>
            Menu
        </h2>
        <ul>
           {menuData?.itemCards?.map((each,id)=> {
            return <li key={id}>
                {each?.card?.info?.name}
                -{"Rs-"} {each?.card?.info?.price}
            </li>
           })}
        </ul>
    </div>
  )
}

export default RestaurantMenu;