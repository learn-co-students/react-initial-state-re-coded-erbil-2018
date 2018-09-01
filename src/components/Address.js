import React from 'react';
 
class Address extends React.Component {
  constructor() {
    super();
 
    this.state = {
      
    }
  } 
 
  render() {
    return (
      
        <div className="address">{this.props.street}, {this.props.city}</div>
      
    );
  }
}
 
export default Address;