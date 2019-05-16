import React, { Component } from "react";

class InputOnChangeComponent extends Component{
  constructor(props){
    super(props);
  }

  render(){
  console.log('inside InputOnChangeComponent');
  const {name, defaultValue } = this.props.settings;

  return(
    <input name={name} defaultValue={defaultValue} />
  )
  }
}
export default InputOnChangeComponent;