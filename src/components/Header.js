import {LOGO_URL} from "../utils/constants"
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import userContext from "../utils/userContex";
import { useSelector } from "react-redux";
const Header =()=>{
  let [btn,setbtn]=useState("login");
  const status=useOnlineStatus();
  //subscribing to the store
  const cartItems=useSelector((store)=>store.cart.items);
  console.log(cartItems);
  const { loggedInUser } = useContext(userContext);
    return(
       
       <div className="flex justify-between bg-red-500 shadow-lg border-black ">
          <div className="logo-container">
            <img className="w-24" src={LOGO_URL}/>
          </div>
          <div className="nav-items ">
            <ul className="flex ">
                <li className="p-4 m-4">Online Status {status ? "🟢":"🔴"}</li>
                <li className="p-4 m-4"><Link to="/">Home</Link></li>
                <li className="p-4 m-4"><Link to="/about">About Us</Link></li>
                <li className="p-4 m-4"><Link to="/contact">Contact Us</Link></li>
                <li className="p-4 m-4"><Link to="/grocery">Grocery</Link></li>
                <li className="p-4 m-4"><Link to="/cart">Cart {cartItems.length}</Link></li>
                <button className="login m-2 p-2 rounded-lg bg-red-600  hover:bg-red-400" onClick={()=>{
                  if(btn==="login"){
                    setbtn("logout");
                  } else{
                    setbtn("login");
                  }
                  
                
                }}>{btn}</button>
                <li>{loggedInUser}</li>
            </ul>
          </div>
       </div>

    );
}
export default Header;