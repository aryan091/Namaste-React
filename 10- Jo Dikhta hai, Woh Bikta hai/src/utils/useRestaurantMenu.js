import React, {useEffect , useState }from 'react'
const useRestaurantMenu = (id) => {

    const [ restaurantInfo , setRestaurantInfo ] = useState(null)

    
    const fetchMenu = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId='+id)

    const json = await data.json()
    setRestaurantInfo(json.data)

   
      }

    useEffect(() => {
        fetchMenu()
    },[])

    return restaurantInfo
    
}

export default useRestaurantMenu;