import React, { Component } from "react";
import './styleTables.scss';

class TableDataRowComponent extends Component{
  constructor(props){
    super(props);
  }

  render(){
  console.log('inside TableDataRowComponent');


  const TDlist =(props) =>{
    const arrDataRowItems = this.props.arrDataRowItems;
    console.log('this.props',this.props);
    return arrDataRowItems.map((x,idx)=><td key={idx}>{x}</td>);
  }

  return(
    <tr id='tableTR' className='tableDataRowComponent' >
      <TDlist />
    </tr>
  )
  }
}
export default TableDataRowComponent;