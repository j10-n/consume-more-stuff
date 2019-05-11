import React, { Component } from "react";

import BulletList from './BulletList';
import '../scss/styles.scss';

class CategoriesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrCategories: []
    };
  }

  getData() {
    fetch("/genres")
      .then(res => {
        // let data = res.json();
        return res.json(res);
      })
      .then(arr => {
        console.log("body", arr);

        this.setState({ arrCategories: arr });
      });
  }

  componentDidMount() {
    this.getData();
  }


  //
  render() {

    let arrCategories = this.props.arrCategories;
    arrCategories = this.state.arrCategories;
    arrCategories.map(x=>x.name);
    console.log("CategoriesComponent:props: ", this.props);
    console.log("CategoriesComponent:arrCategories: ", arrCategories);
    return (
      <div id='categories' bg="dark" variant="dark">
        <BulletList h1='Genres' arrList={arrCategories} />
      </div>
    );
  }
}
export default CategoriesComponent;