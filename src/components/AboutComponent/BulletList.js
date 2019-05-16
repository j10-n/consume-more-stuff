import React, { Component } from "react";

class BulletList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const compareNames = (a, b)=>{return a -b};
    let arrList = this.props.arrList.sort(compareNames);
    const h1 = this.props.h1;
    console.log("this.props", this.props);
    return (
      <div className='bulletList'>
        <h1>{h1}</h1>
        <ul>
          {(arrList || [])
            .sort(compareNames)
            .map((item,idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default BulletList;
