/**
 * Created by shenlin on 16/12/2017.
 */
import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { connect } from 'react-redux';

import { columnsMaker, dataMaker } from './utils';
import './styles.css';

const colNum = 20;
const rowNum = 10;
class StockTable extends Component {
  constructor() {
    super();
    this.state = {
      data: dataMaker(colNum, rowNum),
    };
    this.renderEditable = this.renderEditable.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const old = [...this.state.data];
    old.push({
      title: 'CAC40',
      value0: 100,
      value1: 100,
    });
    this.setState({ data: dataMaker(2, 11) });
    console.log(old);
    console.log(this.state);
  }

  renderEditable(cellInfo) {
    if (cellInfo.index > 7) {
      return (
        <div
          style={{ height: '20px' }}
          contentEditable
          suppressContentEditableWarning
          onFocus={(e) => {
            console.log('hi');
          }}
          onBlur={(e) => {
            { /*const data = [...this.state.data];*/ }
            console.log(cellInfo);
          }}
          dangerouslySetInnerHTML={{
            __html: this.state.data[cellInfo.index][cellInfo.column.id],
          }}
        />
      );
    } 
    return (
      <div
        style={{ height: '20px' }}
        dangerouslySetInnerHTML={{
            __html: this.state.data[cellInfo.index][cellInfo.column.id],
          }}
      />
    );
  }
  

  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={columnsMaker(colNum, this.renderEditable)}
          defaultPageSize={rowNum}
        />
      </div>
    );
  }
}

export default connect(store => ({
  cac40: store.stock.cac40,
  nasdaq: store.stock.nasdaq,
}))(StockTable);

