import React, {useEffect , useState }from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'

const RestaurantMenu = () => {

    const [ restaurantInfo , setRestaurantInfo ] = useState(null)

    const {id} = useParams()

    const fetchMenu = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=32.7983248&lng=74.9151638&restaurantId='+id)

    const json = await data.json()
    setRestaurantInfo(json.data)

   
      }

    useEffect(() => {
        fetchMenu()
    },[])

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