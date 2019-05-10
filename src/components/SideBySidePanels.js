import React, { Component } from "react";
import BulletList from "./BulletList";

import '../scss/styles.scss';

class SideBySidePanels extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='sideBySidePanels'>
        <span id='leftPanel' >
          <BulletList {...this.props.leftPanel} />
        </span>
        <span id='rightPanel' >
          <BulletList {...this.props.rightPanel} />
        </span>
      </div>
    );
  }
}
export default SideBySidePanels;