import React, { Component } from "react";
import { Card, Button, Form, Table, ButtonGroup  } from 'react-bootstrap';
import { BrowserRouter as Router, NavLink, Route, Switch, Redirect, Prompt } from 'react-router-dom';

import '../styleTables.scss';
import TableHeaderComponent from "../TableHeaderComponent";
import TableDataRowComponent from '../TableDataRowComponent';

class TableComponent extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    console.log('inside TableComponent');

    const TBodyHorz=(props)=>{
      const arrDataRows = this.props.arrDataRows;
      return arrDataRows.map((arrDataRow,idx)=><TableDataRowComponent key={idx} arrDataRowItems={arrDataRow} />);
    }

    const arrHeadings = this.props.arrHeadings;
    return(
      <Table className='table' striped bordered hover size='lg'>
        <TableHeaderComponent arrList = {arrHeadings}/>
        <tbody>
          <TBodyHorz />
        </tbody>
      </Table>
    );



  }
}
export default TableComponent;