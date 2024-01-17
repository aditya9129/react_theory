import Itemlist from "./Itemlist";
import { useState } from "react";
export const RestaurantCategory=({data,showItems, setShowIndex})=>{
   function handleclick(){
    
      setShowIndex();
   }
   return <div className="flex-col m-2">
    <div className="flex justify-between mx-auto  w-6/12 shadow-lg bg-red-300  p-2 rounded-lg">
    <span className="cursor-pointer hover:text-lg" onClick={handleclick}>{data.title} ({data.itemCards?.length })</span>
  <span>⬇️</span>
    
   </div>
   <div className="flex justify-between mx-auto  w-6/12 shadow-lg bg-red-200   rounded-lg">
   {showItems &&  <Itemlist data={data.itemCards }/> }
   </div>
   </div>
}
export const RestaurantCategory2=({data})=>{
    console.log(data);z
    return <div className="flex justify-between mx-auto  w-6/12 shadow-lg bg-red-300 m-2 p-2 rounded-lg">
     <span>{data.title} ({data.categories[0]?.itemCards?.length})</span>
   <span>⬇️</span>
     {/* <Itemlist data={data.itemCards ? data.itemCards : data.categories[0]?.itemCards}/> */}
    </div>
 }
