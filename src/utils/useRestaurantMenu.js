import { MENU_URL } from "./constants";
import { useState,useEffect } from "react";
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    console.log(resId);
    useEffect(() => {
      
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const data = await fetch(MENU_URL+resId);
      const json = await data.json();
      
      setResInfo(json.data);
    };
  console.log(resInfo)
    return resInfo;
  };
  
  export default useRestaurantMenu;







 
