import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from './utils/useRestaurantMenu'
import RestaurantCategory from './RestaurantCategory.jsx'
const RestaurantMenu = () => {
const {resId} = useParams()
console.log("params",resId)
    const {restName,menuData,categoryList} = useRestaurantMenu(resId);
    const [showIndex,setShowIndex] = useState(null)
  return (
    <div className='text-center'>
        <h1 className='font-bold my-6 text-2xl'>
           {restName?.card?.card?.text}
        </h1>
        {/* <ul>
           {menuData?.itemCards?.map((each,id)=> {
            return <li key={id}>
                {each?.card?.info?.name}
                -{"Rs-"} {each?.card?.info?.price}
            </li>
           })}
        </ul> */}
        {categoryList?.map((eachCat,index) => (
          //Controlled Component
          <RestaurantCategory 
          category={eachCat?.card?.card}
          showItems={showIndex === index ? true :false}
          setShowIndex={()=>setShowIndex(index)}
          />
          ))}
    </div>
  )
}

export default RestaurantMenu;