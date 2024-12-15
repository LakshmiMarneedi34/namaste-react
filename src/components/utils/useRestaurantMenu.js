import { MENU_API } from './constants' 
import React, { useEffect, useState } from 'react'
const useRestaurantMenu = (resId) => {
    const [menuData,setMenuData]=useState([])
    const [restName,setRestName] = useState([])
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
    return {menuData,restName}
}

export default useRestaurantMenu;