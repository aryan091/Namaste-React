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


    

    return(
        <div className="restaurant-card m-4 p-4 w-64 h-[350]  shadow-lg rounded-lg transform transition-transform ease-in-out hover:scale-95 ">
            <div className="">
            <img className="restaurant-logo rounded-lg w-full h-32" src={CDN_URL+cloudinaryImageId} alt="Restaurant Logo" />
            </div>
            
            <h3 className="font-bold py-2 text-lg text-center">{name}</h3>
            <h4 className="text-gray-400 font-bold">{cuisines.join(", ")}</h4>
            <h4 className="text-gray-400 font-bold">{avgRatingString? avgRatingString : avgRatingString}⭐</h4>
            <h4 className="text-gray-400 font-bold">{deliveryTime} Mins</h4>
            <h4 className="text-gray-400 font-bold">{costForTwo}</h4>
        </div>
    )
}

// HIGHER ORDER FUNCTION

// Input => RestaurantCard .. Output => Enhanced RestaurantCard

export const withTopRatedLabel = (RestaurantCard) => {

    return (props) => {
        
        return(
            <div>
            <label className="absolute bg-black text-white font-semibold text-xs m-1 p-1 mx-2 z-10 ">TOP RATED</label>
            <RestaurantCard {...props} />
        </div>
        )

    }
}

export default RestaurantCard