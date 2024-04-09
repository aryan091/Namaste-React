import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer"


const Body = () => {

    const [listOfRestaurants , setListOfRestaurants] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText , setSearchText] = useState("")
  
    useEffect(() => {
      fetchData()
    }, [])
    
    const fetchData = async () => {
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING')

      const json = await data.json()

      const resData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants

      console.log(resData)
      setListOfRestaurants(resData)
      setFilteredRestaurant(resData)

      return resData
      
    }
    
    const handleClick = () => {
        let filteredList = listOfRestaurants.filter((res) => res?.info?.avgRating >= 4.5)
       
        setFilteredRestaurant(filteredList);

        console.log(listOfRestaurants.length,"ListOfRes len - ")
        console.log(filteredRestaurant.length,"FilOfRes len - ")
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

      console.log(listOfRestaurants.length,"ListOfRes len - ")
        console.log(filteredRestaurant.length,"FilOfRes len - ")
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
            filteredRestaurant.map((res) => <  RestaurantCard resData = {res} key={res?.info?.id}/>)
        }

        </div>
      </div>
    );
}
  
export default Body