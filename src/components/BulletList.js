import React, { Component } from "react";

class BulletList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let arrList = this.props.arrList;
    const h1 = this.props.h1;
    console.log("h1", h1);
    return (
      <div className='bulletList'>
        <h1>{h1}</h1>
        <ul>
          {(arrList || []).map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default BulletList;
