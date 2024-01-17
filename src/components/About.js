import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{

  constructor(props){
    super(props);
    console.log("p constructor");
    this.state={
      userInfo:{
        name:"dummy",
        location:"dummy",
      },

    };
   // console.log(this.state.userInfo);
  }
  async componentDidMount(){
    const data=await fetch("https://api.github.com/users/aditya9129");
    const json=await data.json();
    console.log(json);
    this.setState({
      userInfo:json,
    });
   
  }
  render(){
    //console.log("p render");
    const {name,location}=this.state.userInfo;
    return (
             
          
             <div className="about">
    <h1>Name:{name}</h1>
    <h2>I am from {location}</h2>
    <p>This is about me</p>
   </div>
             
             
             );
  }

}
export default About;




// const About=()=>{
//     return (
    
//     <UserClass name={"Aditya"} location={"Delhi"}/>
//     );
// }
// export default Abou