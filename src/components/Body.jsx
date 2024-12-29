import RestaurantCard from "./Restaurant";
import {useEffect, useState} from "react"
import Shimmer from "./Shimmer";
import useOnlineStatus from "./utils/useOnlineStatus";
const Body = () => {
    const [listOfRest,setListOfRest]=useState([]);
    const [seacrhValue,setSearchValue] = useState([])
    const [originalList,setOriginalList]=useState([])
    const [loader,setLoader] = useState(true)
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async() => {
        // const data = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.440513&lng=78.36466759999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        // const data = await fetch('https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.440513&lng=78.36466759999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const data = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.440513&lng=78.36466759999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        
        const convertedData = await data?.json()
        setLoader(false)
        console.log("convertedData",convertedData)
        // console.log("eee",convertedData?.data?.cards?.[4])
        // console.log("deee",convertedData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        if(convertedData?.data?.cards && convertedData?.data?.cards?.length>0){
        let modifiedData = convertedData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((resta)=>{
            return {
                name:resta?.info?.name,
                cuisines:resta?.info?.cuisines?.join(","),
                imagedID:resta?.info?.cloudinaryImageId,
                avgRating:resta?.info?.avgRating,
                costForTwo:resta?.info?.costForTwo,
                deliveryTime:resta?.info?.sla?.deliveryTime,
                id:resta?.info?.id
            }
        })
        setListOfRest(modifiedData)
        setOriginalList(modifiedData)
    }else{
        setLoader(false)
        setListOfRest([])
        setOriginalList([])
    }
    }
    console.log("original list",originalList)
    const handleOnChange = (e) => {
        let currentValue = e.target.value;
        console.log("currentValue",currentValue)
        let modifiedVal = currentValue.toLowerCase().trim()
        setSearchValue(modifiedVal)
        if(!modifiedVal){
            setListOfRest(originalList)
            return;
        }
        const filteredlist = listOfRest?.filter((each)=> {
            return(
                each?.name?.toLowerCase()?.includes(modifiedVal) ||
                each?.cuisines?.toLowerCase()?.includes(modifiedVal) || 
                String(each?.avgRating)?.toLowerCase()?.includes(modifiedVal) || 
                each?.costForTwo?.toLowerCase()?.includes(modifiedVal) || 
                String(each?.deliveryTime)?.toLowerCase()?.includes(modifiedVal)
            )
        })
        console.log("##filteres",filteredlist)
        setListOfRest(filteredlist)
    }

    const onlineStatus = useOnlineStatus();
    if(!onlineStatus) return (
        <h1>Looks like you're offline!! Please Check your internet connection;</h1>
    )
    return listOfRest?.length===0 ? <Shimmer /> : (
    <div className="body">
       <div className="flex">
        <div className="seacrh m-4 p-4">
        <input className="border border-solid border-black" type="text" placeholder="Search for restaurants..." value={seacrhValue}
        onChange={(e)=>{handleOnChange(e)}}
        ></input>
        <button className="px-2 py-2 bg-green-100 m-4 rounded-lg"
        onClick={()=>{
            let filteredRestr = listOfRest?.filter((eachRest)=>Number(eachRest?.avgRating) > 4)
            console.log("filteredRestr",filteredRestr)
            setListOfRest(filteredRestr)
        }}
        > Top Rated Restaurants
        </button>
        </div>
       </div>
        <div className="flex flex-wrap">
            {listOfRest?.map((resObj)=>{
                return <RestaurantCard 
                resData={resObj}
                key={resObj?.id}
                />
            })}
        </div>
    </div>
    )
}

export default Body;