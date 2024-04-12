import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import useRestaurantMenu from '../utils/useRestaurantMenu'

const RestaurantMenu = () => {

    


    const {id} = useParams()

    const restaurantInfo = useRestaurantMenu(id)


    //console.log("Res Name - ",restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)

    const  itemCards  =restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards

    // const { name , cuisines  , costForTwoMessage ,avgRatingString ,sla , labels } = restaurantInfo?.cards[2]?.card?.card?.info

    //console.log("Item Cards - ",itemCards[0].card.info.name)
   // console.log("Item Cards - ",itemCards[1].card.info.name)

   //console.log("Item Cards - ",restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards)

   if(!itemCards) return <Shimmer/>

  return (
    <div className="menu">
        <h1>{restaurantInfo?.cards[2]?.card?.card?.info?.name} </h1>
        <h3>{restaurantInfo?.cards[2].card.card.info.cuisines.join(", ")} - {restaurantInfo?.cards[2].card.card.info.costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul>
          {itemCards?.map((item) => <li key={item.card.info.name} >{item.card.info.name}</li>)}
           
        </ul>
    </div>
  )
}

export default RestaurantMenu;