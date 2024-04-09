import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";

const Body = () => {
  
    return (
      <div className="body">
        <div className="search">
          Search
        </div>
        <div className="restaurant-container">
        {
            restaurants.map((res) => <  RestaurantCard resData = {res} key={res?.info?.id}/>)
        }

        </div>
      </div>
    );
}
  
export default Body