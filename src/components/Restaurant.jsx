import { CDN_URL } from "./utils/constants";

const RestaurantCard = ({resData}) => {
    // console.log("res",resData)
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg"alt="res-logo"src={`${CDN_URL}${resData?.imagedID}`}/>
            <h3 className="font-bold py-3 text-lg">{resData?.name}</h3>
            <h4>{resData?.cuisines}</h4>
            <h4>{resData?.avgRating} stars</h4>
             <h4>{resData?.costForTwo}</h4>
            <h4>{resData?.deliveryTime} mins</h4>
        </div>
    )
}

export default RestaurantCard;