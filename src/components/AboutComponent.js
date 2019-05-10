import React from "react";
import SinglePanel from "./SinglePanel";
import SideBySidePanels from "./SideBySidePanels";

class AboutComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const arrBE_Stack = ["ExpressJS", "knexJS", "bookshelfJS", "passportJS"];
    const arrFE_Stack = ["ReactJS", "Bootstrap", "Auth0", "mailGun"];
    const leftPanel = { h1: 'Front End Stack', arrList: arrFE_Stack };
    const rightPanel = { h1: 'Back End Stack', arrList: arrBE_Stack };
    const aboutPanel = { h1: 'About CMS', description: 'asdfalsdflksflksjdflkjsdflkjsdf  sdflkjsdf sdflkj sdf' };
    console.log('index: leftPanel', leftPanel);
    console.log('index: rightPanel', rightPanel);
    console.log('index: aboutPanel', aboutPanel);
    // console.log('this.props', this.props);
    // const leftPanel = this.props.leftPanel;
    // const rightPanel = this.props.rightPanel;
    // const aboutPanel = this.props.aboutPanel;
    // console.log('AboutComponent:this.props.leftPanel: ', this.props.leftPanel);
    // console.log('AboutComponent:this.props.match: ', this.props.match.params);
    return (
      <div>
        <SinglePanel {...aboutPanel} />
        <br />
        <SideBySidePanels leftPanel={leftPanel} rightPanel={rightPanel} />
      </div>
    );
  }
}

export default AboutComponent;
