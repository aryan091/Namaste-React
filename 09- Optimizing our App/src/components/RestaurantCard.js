import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {

    const { resData } = props;

    const { 
        cloudinaryImageId ,
        
        id,
            name ,
          cuisines ,
          avgRating,
          avgRatingString ,
          costForTwo
        } = resData?.info

    const{deliveryTime} = resData?.info?.sla

    console.log( resData)
    

    return(
        <div className="restaurant-card">
            <img className="restaurant-logo" src={CDN_URL+cloudinaryImageId} alt="Restaurant Logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString? avgRatingString : avgRatingString}⭐</h4>
            <h4>{deliveryTime} Mins</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard