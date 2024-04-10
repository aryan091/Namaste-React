import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer"
import { Link } from 'react-router-dom';



const Body = () => {

    const [listOfRestaurants , setListOfRestaurants] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText , setSearchText] = useState("")
  
    useEffect(() => {
      fetchData()
    }, [])
    
    const fetchData = async () => {
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=32.7983248&lng=74.9151638&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

      const json = await data.json()

      const resData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants


      setListOfRestaurants(resData)
      setFilteredRestaurant(resData)

      return resData
      
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


    // if(listOfRestaurants.length === 0) return <Shimmer/>

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
      
      <div className="body">
        
        <div className="filter">
          <div className="search">
            <input type="text" 
            className="search-box" 
            value={searchText}
            onChange={handleSearchChange}
            />
            <button className="search-btn" onClick={handleSearch}>Search</button>
          </div>

          <button className="filter-btn" onClick={handleClick}>Top rated Restaurants</button>
          <button className="clear-btn" onClick={handleClickClear}>Clear Filter</button>
        </div>
        <div className="restaurant-container">
        {
            filteredRestaurant.map((res) => 
            (
              
             <Link
             to={"/restaurant/" + res?.info?.id}
             key={res?.info?.id}
             
             >
            <  RestaurantCard resData = {res} />
            </Link>
          )
          )
        }

        </div>
      </div>
    );
}
  
export default Body