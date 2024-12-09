import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MENU_API } from './utils/constants'
const RestaurantMenu = () => {
const [menuData,setMenuData]=useState([])
const [restName,setRestName] = useState([])

const {resId} = useParams()
console.log("params",resId)
    useEffect(()=>{
        fetchingMenuData()
    },[])

    const fetchingMenuData = async()=> {
        const data = await fetch(MENU_API+resId)
        const json = await data.json()
        console.log("menu data",json)
        const modifiedData = json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
        console.log("modified data",modifiedData)
        setMenuData(modifiedData)
        setRestName(json?.data?.cards?.[0])
    }
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