import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";


const Body = () => {

    const [listOfRestaurants , setListOfRestaurants] = useState(restaurants)
  
    
    const handleClick = () => {
        let filteredList = restaurants.filter((res) => res?.info?.avgRating >= 4.5)
        setListOfRestaurants(filteredList)
    }

    const handleClickClear = () => {
        setListOfRestaurants(restaurants)
    }

    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={handleClick}>Top rated Restaurants</button>
          <button className="clear-btn" onClick={handleClickClear}>Clear Filter</button>
        </div>
        <div className="restaurant-container">
        {
            listOfRestaurants.map((res) => <  RestaurantCard resData = {res} key={res?.info?.id}/>)
        }

        </div>
      </div>
    );
}
  
export default Body