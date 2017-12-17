/**
 * Created by shenlin on 16/12/2017.
 */
import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { connect } from 'react-redux';
import { modifyRecord, pauseTableUpdate } from '../../actions/tableActions';
import { columnsMaker } from './utils';
import { colNum, rowNum } from '../../global';
import './styles.css';


class StockTable extends Component {
  constructor() {
    super();
    this.renderEditable = this.renderEditable.bind(this);
  }

  renderEditable(cellInfo) {
    if (cellInfo.index > 7) {
      return (
        <div
          style={{ height: '20px' }}
          contentEditable
          suppressContentEditableWarning
          onFocus={() => {
            this.props.dispatch(pauseTableUpdate());
          }}
          onBlur={(e) => {
            this.props.dispatch(pauseTableUpdate());

            const cell = this.props.data[cellInfo.index][cellInfo.column.id];

            let newValue = Number(e.target.innerHTML);
            // Input is a number
            if (newValue) {
              newValue = Number(parseFloat(newValue).toFixed(2));
              // has change
              if (newValue !== cell.value) {
                this.props.dispatch(modifyRecord(cell.index, cell.type, newValue));
              }
            }
          }}
          dangerouslySetInnerHTML={{
            __html: this.props.data[cellInfo.index][cellInfo.column.id].value,
          }}
        />
      );
    }
    return (
      <div
        style={{ height: '20px' }}
        dangerouslySetInnerHTML={{
            __html: this.props.data[cellInfo.index][cellInfo.column.id].value,
          }}
      />
    );
  }

  render() {
    return (
      <div>
        <ReactTable
          data={this.props.data}
          columns={columnsMaker(colNum, this.renderEditable)}
          defaultPageSize={rowNum}
        />
      </div>
    );
  }
}

export default connect(store => ({
  data: store.stock.tableData,
}))(StockTable);

