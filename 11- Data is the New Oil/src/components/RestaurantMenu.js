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
    <div className="menu flex flex-col justify-center items-center p-4 m-4">
      <div className='m-2 p-2 shadow-lg w-full'>
      <h1 className='font-bold py-2 text-3xl text-center'>{restaurantInfo?.cards[2]?.card?.card?.info?.name} </h1>
        <h3 className='text-grey-500 py-2 text-xl text-center'>{restaurantInfo?.cards[2].card.card.info.cuisines.join(", ")} - {restaurantInfo?.cards[2].card.card.info.costForTwoMessage}</h3>
      </div>
      <div className='m-2 p-2 shadow-lg w-full h-fit'>
      <h2 className='font-bold py-2 text-2xl text-center'>Menu</h2>
        <ul className='flex flex-col'>
          {itemCards?.map((item) => <li className='text-grey-500 py-2 text-sm text-center' key={item.card.info.name} >{item.card.info.name}</li>)}
           
        </ul>
      </div>
        
        
    </div>
  )
}

export default RestaurantMenu;