import reslist from "../utils/mockdata"
import ResturantCard ,{WithPromoted, WithPromoted} from "./ResturantCard";
import { useState ,useEffect,useContext} from "react";
import Shimmer  from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import userContext from "../utils/userContex";



const Body=()=>{
  //  console.log(list);

    useEffect(() => {
      const fetchData = async () => {
        try{
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999");
            const json = await data.json();
            const apilist=json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
             setlistofrest(apilist);
             setcopylistofrest(apilist);
          console.log(apilist);
         }catch{
            setlistofrest(reslist);
            setcopylistofrest(reslist);
        }
      
         
          //console.log(json);
       
      };
  
      fetchData(); // Invoke the function inside useEffect
    }, []);
    const [searchtext,setsearchtext]=useState("");
    const [listofrest,setlistofrest]=useState([]);
    const [copylistofrest,setcopylistofrest]=useState([]);
    const WithPromotedLabel=WithPromoted(ResturantCard);
    const status =useOnlineStatus();
    if(status===false){
      return (
        <h1>you are offline</h1>
      )
    }

    if(listofrest.length===0){
      return <Shimmer/>
    }
    const { loggedInUser, setUserName } = useContext(userContext);
    return (
        <div className="body  bg-red-100">
            <div className="flex m-2 items-center justify-center">
               <div className="search m-2 p-2">
                <input placeholder="search restraunts..." type="text" value={searchtext} onChange={(e)=>{
                    setsearchtext(e.target.value);
                   
                }} className="search-input border p-2 rounded-lg m-2 border-solid border-black"></input>
                <button className="bg-red-600 p-2 rounded-lg  hover:bg-red-400" onClick={()=>{
                   const list=copylistofrest.filter((res)=>res.info.name.toLocaleLowerCase().includes(searchtext.toLocaleLowerCase()));
                   setlistofrest(list)
                }
                }>search</button>
               </div>

                <div>
                <button className="bg-red-600 p-2 rounded-lg  hover:bg-red-400" onClick={()=>{ 
                  const filterlist=listofrest.filter((res)=>res.info.avgRating>4.2);
                  setlistofrest(filterlist)
                }}>
                    Top Rated Resturants</button>
                <label>userName</label>
                <input className="border-black border-solid m-2" onChange={(e)=>{
                    setUserName(e.target.value)
                }}></input>    
                </div>

              
            </div>

            <div className="flex flex-wrap justify-center ">
                {
                    listofrest.map(
                      (data,index)=><Link to={"/restaurant/"+(data?.info?.id)}>
                        {
                        data.info.isOpen ? <WithPromotedLabel key={index} resdata={data}/> : <ResturantCard key={index} resdata={data}/>
                        
                        
                         } 
                        </Link>
                      )

                }
              
              
            </div>
        </div>
    );
}

export default Body 