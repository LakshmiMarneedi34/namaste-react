import { Link } from "react-router-dom";
import { LOGO_URL } from "./utils/constants";
import {useState} from "react"
import useOnlineStatus from "./utils/useOnlineStatus";
const Header = () => {
    const [logName,setLogName]=useState("Login")
    const onlineStatus = useOnlineStatus();
    return(
        <div className="flex justify-between bg-green-100 shadow-lg">
            <div className="logo-container">
            <img className="w-56" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                    Online Status:{onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-4"> 
                    <Link to="/">
                      Home
                       </Link>
                    </li>
                    <li className="px-4">
                       <Link to="/about">
                       About Us
                       </Link> 
                    </li>
                    <li className="px-4">
                    <Link to="/contact-us">
                    Contact Us
                       </Link>
                    </li>
                    <li className="px-4">
                    <Link to="/grocery">
                    Grocery
                       </Link>
                    </li>
                    <li className="px-4"> Cart </li>
                    <button className="login"
                    onClick={()=>{
                        logName==="Login" ?  setLogName("Logout") :  setLogName("Login")
                    }}
                    >{logName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;