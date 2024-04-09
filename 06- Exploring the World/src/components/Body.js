import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer"


const Body = () => {

    const [listOfRestaurants , setListOfRestaurants] = useState([])
  
    useEffect(() => {
      fetchData()
    }, [])
    
    const fetchData = async () => {
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING')

      const json = await data.json()

      const resData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants

      setListOfRestaurants(resData)

      return resData
      
    }
    
    const handleClick = () => {
        let filteredList = listOfRestaurants.filter((res) => res?.info?.avgRating >= 4.5)
        setListOfRestaurants(filteredList)
    }

    const handleClickClear = () => {
        fetchData()
    }

    // if(listOfRestaurants.length === 0) return <Shimmer/>

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
      
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