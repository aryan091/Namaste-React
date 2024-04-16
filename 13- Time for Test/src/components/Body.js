import RestaurantCard , { withTopRatedLabel } from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer"
import { Link } from 'react-router-dom';

import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {

    const [listOfRestaurants , setListOfRestaurants] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText , setSearchText] = useState("")

    // Using Higher Order Function
    const RestaurantCardTopRated = withTopRatedLabel(RestaurantCard)
  
    useEffect(() => {
      fetchData()
    }, [])
    
    const fetchData = async () => {
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')


      
      const json = await data.json()
//console.log("JsonData - ",json)

      const resData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants


      setListOfRestaurants(resData)
      setFilteredRestaurant(resData)

     //console.log("ResData - ",resData)
      
    }
    
    const handleClick = () => {
        let filteredList = listOfRestaurants.filter((res) => res?.info?.avgRating >= 4.0)
       
        setFilteredRestaurant(filteredList);

        
    }
    const handleSearch = () => {
      const filteredRestaurant = listOfRestaurants.filter((res) => {
        return res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
      })
      

      setFilteredRestaurant(filteredRestaurant);
    }

    const handleClickClear = () => {
      setFilteredRestaurant(listOfRestaurants)
      setSearchText("")

      
  }

    const handleSearchChange = (e) => {
      setSearchText(e.target.value)
    }

    const onlineStatus = useOnlineStatus()

    if(!onlineStatus){
      return <h1>🔴 OFFLINE</h1>
    }
    

    return listOfRestaurants.length === 0 ? (
      <Shimmer />
    ) : (
      
      <div className="body shadow-lg">
        
        <div className="filter flex items-center justify-center m-2 p-2 shadow-lg">
          <div className="search m-4 p-4">
            <input 
            type="text" 
            data-testid  = "search-input"
            className="search-box border-solid border-black border-2 px-4 py-2 rounded-3xl" 
            value={searchText}
            onChange={handleSearchChange}
            />
            <button className="search-btn px-4 py-2 bg-green-400 m-4 rounded-md shadow-lg" onClick={handleSearch}>Search</button>
          </div>

          <div className="search m-4 p-4">
            <button className=" px-4 py-2 bg-green-400 m-4 rounded-md shadow-lg" onClick={handleClick}>Top Rated Restaurants</button>
            <button className=" px-4 py-2 bg-green-400 m-4 rounded-md shadow-lg" onClick={handleClickClear}>Clear Filter</button>
          </div>

          
        </div>

        <div className="restaurant-container flex items-center
         justify-center flex-wrap ">
        {
            filteredRestaurant.map((res) => 
            (
              
             <Link
             to={"/restaurant/" + res?.info?.id}
             key={res?.info?.id}
             >

              {res?.info?.avgRating >= 4.0 ? <RestaurantCardTopRated resData = {res} /> : <  RestaurantCard resData = {res} /> }
            

            </Link>
          )
          )
        }

        </div>
      </div>
    );
}
  
export default Body