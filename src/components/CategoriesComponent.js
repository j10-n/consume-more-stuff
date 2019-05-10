import React, { Component } from "react";

import BulletList from './BulletList';
import '../scss/styles.scss';

class CategoriesComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    const arrCategories = this.props.arrCategories;
    console.log("CategoriesComponent:props: ", this.props);
    console.log("CategoriesComponent:arrCategories: ", arrCategories);
    return (
      <div id='categories' bg="dark" variant="dark">
        <BulletList h1='Categories' arrList={arrCategories} />
      </div>
    );
  }
}
export default CategoriesComponent;