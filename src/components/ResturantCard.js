import {IMG_URL} from "../utils/constants" 
const ResturantCard=(props)=>{
    const {resdata}=props;
    console.log(resdata);
    const { cloudinaryImageId, cuisines, sla, avgRating } = resdata?.info
    return (
     
        <div className=" bg-red-600 m-3 p-2 h-[440px] w-64 rounded-lg hover:bg-red-400">   
    
          <img src={IMG_URL+cloudinaryImageId} className="h-72 rounded-lg"/>
          <h3>{resdata.info.name}</h3>
          <h4 className="cusines">{cuisines.join(" , ")}</h4>
          <h5>ETA -{sla.deliveryTime} min</h5>
          <h5>{avgRating}★</h5>

         </div>
    );
}
export const WithPromoted=(ResturantCard)=>{
    return (props)=>{
        return (
            <div className="bg-red-600 m-2 rounded-lg">
                <label className="bg-red-500 p-2 rounded-lg absolute">Open</label>
                <ResturantCard {...props}/>
            </div>
        )
    }
}
export default ResturantCard