
import  {useDispatch}  from "react-redux";
import { IMG_URL } from "../utils/constants";
import { additems } from "../utils/cartSlice";
const Itemlist =({data})=>{
   // console.log(data);
   const dispatch=useDispatch();
   const handleclick=(item)=>{
      ///dispatch an action
      dispatch(additems(item));
   }

   return (
    <div className="w-full">
     {
        data.map((c)=>{
        return ( 
          <div className="bg-red-300 p-1 shadow-lg m-2 flex justify-between  rounded-lg">
         <div className="flex-col">
         <p>{c.card?.info?.name} </p>
         <p>Rs.{c.card?.info?.price/100 ?c.card?.info?.price/100  :c.card?.info?.defaultPrice/100 }</p>
         <button className="bg-black rounded shadow-md p-1 text-white" onClick={()=>handleclick(c)}>ADD</button>
         </div>
          
          {c.card?.info?.imageId && (<img src={IMG_URL + c.card.info.imageId} className="w-2/12 h-[80px]"alt="Card Image" />)}
          
          </div>
        )})
     }
    </div>
   )
}
export default Itemlist
///{ }