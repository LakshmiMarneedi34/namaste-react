import RestaurantCard from "./Restaurant";
import { resList } from "./utils/mockData";
import {useEffect, useState} from "react"
import Shimmer from "./Shimmer";
const Body = () => {
    const [listOfRest,setListOfRest]=useState([]);

    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async() => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.440513&lng=78.36466759999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

        const convertedData = await data?.json()
        console.log("convertedData",convertedData)
        // console.log("eee",convertedData?.data?.cards?.[4])
        // console.log("deee",convertedData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        let modifiedData = convertedData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((resta)=>{
            return {
                name:resta?.info?.name,
                cuisines:resta?.info?.cuisines?.join(","),
                imagedID:resta?.info?.cloudinaryImageId,
                avgRating:resta?.info?.avgRating,
                costForTwo:resta?.info?.costForTwo,
                deliveryTime:resta?.info?.sla?.deliveryTime
            }
        })
        setListOfRest(modifiedData)
    }
    return !listOfRest?.length ? <Shimmer /> : (
    <div className="body">
       <div className="filter">
        <button className="filter -btn"
        onClick={()=>{
            let filteredRestr = listOfRest?.filter((eachRest)=>eachRest?.info?.avgRating >4)
            setListOfRest(filteredRestr)
        }}
        > Top Rated Restaurantrs
        </button>
       </div>
        <div className="res-container">
            {listOfRest?.map((resObj,i)=>{
                return <RestaurantCard 
                resData={resObj}
                key={i}
                />
            })}
        </div>
    </div>
    )
}

export default Body;