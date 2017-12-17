/**
 * Created by shenlin on 16/12/2017.
 */
import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { connect } from 'react-redux';
// import { fetchStock } from '../../actions/appActions';
import { modifyRecord, pauseTableUpdate, forceUpdate } from '../../actions/tableActions';
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
          onFocus={(e) => {
            e.target.parentNode.parentNode.classList.add('selected-row');
            document.getElementsByClassName('rt-tr -odd')[0].childNodes[cellInfo.column.index + 1].classList.add('selected-col');
            this.props.dispatch(pauseTableUpdate());
          }}
          onBlur={(e) => {
            e.target.parentNode.parentNode.classList.remove('selected-row');
            document.getElementsByClassName('rt-tr -odd')[0].childNodes[cellInfo.column.index + 1].classList.remove('selected-col');
            this.props.dispatch(pauseTableUpdate());


            const cell = this.props.tableData[cellInfo.index][cellInfo.column.id];

            let newValue = Number(e.target.innerHTML);
            // Input is a number
            if (newValue) {
              newValue = Number(parseFloat(newValue).toFixed(2));
              // has change
              if (newValue !== cell.value) {
                this.props.dispatch(modifyRecord(cell.index, cell.type, newValue));
                this.props.dispatch(forceUpdate(
                  cell.index,
                  cell.type,
                  newValue,
                  this.props.chartData,
                  this.props.tableData,
                ));
              }
            }
          }}
          dangerouslySetInnerHTML={{
            __html: this.props.tableData[cellInfo.index][cellInfo.column.id].value,
          }}
        />
      );
    }
    return (
      <div
        style={{ height: '20px' }}
        dangerouslySetInnerHTML={{
            __html: this.props.tableData[cellInfo.index][cellInfo.column.id].value,
          }}
      />
    );
  }

  render() {
    return (
      <div>
        <ReactTable
          data={this.props.tableData}
          columns={columnsMaker(colNum, this.renderEditable)}
          defaultPageSize={rowNum}
        />
      </div>
    );
  }
}

export default connect(store => ({
  modifyRecord: store.stock.modifyRecord,
  tableData: store.stock.tableData,
  chartData: store.stock.chartData,
}))(StockTable);

