import { useSelector } from "react-redux";
import Itemlist from "./Itemlist";
const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    return (
    <div className="flex justify-between mx-auto  w-6/12 shadow-lg bg-red-200 m-2 p-2 rounded-lg h-screen">
        <Itemlist data={cartItems}/>
    </div>
    );
}
export default Cart;