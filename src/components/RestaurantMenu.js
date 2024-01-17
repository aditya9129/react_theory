import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {RestaurantCategory,RestaurantCategory2} from "./RestaurantCategory";

   
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
     const [showIndex, setShowIndex] = useState(null);
  if (!resInfo) return <Shimmer />;
 
  const { name, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};

  const list =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  
  const categories = list.filter(
    (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const categories2 = list.filter(
    (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );
  //console.log(categories2);
 
  return (
    <div className="flex-col items-center justify-center h-screen bg-red-100">
      <div className="text-center">
        <h1 className="font-bold text-lg">{name}</h1>
        <h3 className="font-bold">{costForTwoMessage}</h3>
      </div>
      <div>
      {categories.map((c,index) => (
        
        <RestaurantCategory key={c.id} data={c.card?.card} showItems={index === showIndex ? true : false}
        setShowIndex={() => {
          showIndex===index ? setShowIndex(null) : setShowIndex(index)    }}/>
        
        ))

}
{/* {categories2.map((c) => (
        
        <RestaurantCategory2 key={c.id} data={c.card?.card}/>
        
        ))

} */}


      </div>
    

    
    </div>
  );
};
// const RestaurantMenu = () => {
//   const { resId } = useParams();

//   const dummy = "Dummy Data";

//   const resInfo = useRestaurantMenu(resId);

//   const [showIndex, setShowIndex] = useState(null);

//   if (resInfo === null) return <Shimmer />;

//   const { name, cuisines, costForTwoMessage } =
//     resInfo?.cards[0]?.card?.card?.info;

//   const { itemCards } =
//     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

//   const categories =
//     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//       (c) =>
//         c.card?.["card"]?.["@type"] ===
//         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//     );
//   //console.log(categories);

//   return (
//     <div className="text-center">
//       <h1 className="font-bold my-6 text-2xl">{name}</h1>
//       <p className="font-bold text-lg">
//         {cuisines.join(", ")} - {costForTwoMessage}
//       </p>
//       {/* categories accordions */}
//       {categories.map((category, index) => (
//         // controlled component
//         <RestaurantCategory
//           key={category?.card?.card.title}
//           data={category?.card?.card}
//           showItems={index === showIndex ? true : false}
//           setShowIndex={() => setShowIndex(index)}
//           dummy={dummy}
//         />
//       ))}
//     </div>
//   );
// };
export default RestaurantMenu;
























