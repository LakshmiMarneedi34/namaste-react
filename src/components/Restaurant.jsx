import { CDN_URL } from "./utils/constants";

const RestaurantCard = ({resData}) => {
    // console.log("res",resData)
    return(
        <div className="res-card" style={{backgroundColor:'#f0f0f0'}}>
            <img className="res-logo"alt="res-logo"src={`${CDN_URL}${resData?.imagedID}`}/>
            <h3>{resData?.name}</h3>
            {/* {resData?.card?.card?.info?.cuisines?.map((each) => {
                return <h4 key={each}>{each}</h4>;
            })} */}
            <h4>{resData?.cuisines}</h4>
            <h4>{resData?.avgRating} stars</h4>
             <h4>{resData?.costForTwo}</h4>
            <h4>{resData?.deliveryTime} mins</h4>
        </div>
    )
}

export default RestaurantCard;