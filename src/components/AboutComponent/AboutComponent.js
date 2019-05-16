import React from "react";
import SinglePanel from "./SinglePanel";
import SideBySidePanels from "./SideBySidePanels";

class AboutComponent extends React.Component {
  render() {
    const arrBE_Stack = [
      "ExpressJS", "knexJS", "bookshelfJS", "passportJS"];
    const arrFE_Stack = [
      "ReactJS", "Bootstrap", "Auth0", "mailGun"];
    const leftPanel = {
      h1: 'Front End Stack',
      arrList: arrFE_Stack };
    const rightPanel = {
      h1: 'Back End Stack',
      arrList: arrBE_Stack };
    const aboutPanel = {
      h1: 'About CMS',
      description: 'asdfalsd flksflk sjdflk jsd flkjsdf  sdflkjsdf sdflkj sdf' };

    return (
      <div>
        <SinglePanel {...aboutPanel} />
        <br />
        <SideBySidePanels
          leftPanel={leftPanel}
          rightPanel={rightPanel} />
      </div>
    );
  }
}

export default AboutComponent;
