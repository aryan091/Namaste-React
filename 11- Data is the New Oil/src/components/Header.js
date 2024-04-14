import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import { useContext } from "react"
import UserContext from "../context/UserContext"

const Header = () => {

    const onlineStatus = useOnlineStatus()
    const user = useContext(UserContext)

    return(

        <div className="flex justify-between m-4 px-4 shadow-lg">
            <div className=" flex justify-center items-center">
                <Link to="/"><img className="w-24 h-24" src={LOGO_URL} alt="Logo" /></Link>
            </div>
            <div className="nav-items">
                <ul className="flex p-4 m-4 gap-16 items-center">
                    <li className="font-bold text-gray-500">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="font-bold text-gray-500"><Link to="/">Home</Link></li>
                    <li className="font-bold text-gray-500"><Link to="/about">About</Link></li>
                    <li className="font-bold text-gray-500"><Link to="/contact">Contact Us</Link></li>
                    <li className="font-bold text-gray-500"><Link to="/grocery">Grocery</Link></li>                    
                    <li className="font-bold text-gray-500">Cart</li>
                    <li className="font-bold text-gray-500">{user.loggedInUser}</li>
                </ul>
            </div>
        </div>

    )
}

export default Header