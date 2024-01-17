import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log("c constructor");
      }
      componentDidMount(){
        console.log("c Mount")
      }
    render(){
        return (
            <div className="about">
    <h1>Name:{this.props.name}</h1>
    <h2>I am from Delhi</h2>
    <p>This is about me</p>
   </div>
    
    )
        }
}
export default UserClass