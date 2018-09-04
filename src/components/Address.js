import React from "react";

export default class Address extends React.Component 
{
  constructor(props)
  {
    super(props);
    state = {
      fullAddress:`${props.street}, ${props.city}` 
    }
  }
  
  render()
  {
    return (<div className="address">
     {this.props.street},
     {this.props.city}
    </div>)
  }