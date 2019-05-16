import React, { Component } from "react";

import './styleTables.scss';

class TableHeaderComponent extends Component{
  constructor(props){
    super(props);
  }

  render(){
  console.log('inside TableHeaderComponent');


  const THlist =(props) =>{
    const arrHeadings = this.props.arrList;
    console.log('this.props',this.props);
    return arrHeadings.map(x=><th key={x}>{x}</th>);
  }

  return(
    <thead id='tableHeader' className='tableHeaderComponent' >
      <tr>
        <THlist />
      </tr>
    </thead>
  )
  }
}
export default TableHeaderComponent;