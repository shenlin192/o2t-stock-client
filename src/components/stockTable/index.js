/**
 * Created by shenlin on 16/12/2017.
 */
import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { modifyRecord, pauseTableUpdate, forceUpdate } from '../../actions/tableActions';
import { columnsMaker } from './utils';
import { colNum, rowNum } from '../../global';
import './styles.css';


class StockTable extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,

    chartData: PropTypes.shape({
      cac40Chart: PropTypes.arrayOf(PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
      })).isRequired,
      nasdaqChart: PropTypes.arrayOf(PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
      })).isRequired,
    }).isRequired,
  };

  constructor() {
    super();
    this.renderEditable = this.renderEditable.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleOnBlur(e, cellInfo) {
    e.target.parentNode.parentNode.classList.remove('selected-row');
    document.getElementsByClassName('rt-tr -odd')[0].childNodes[cellInfo.column.index + 1].classList.remove('selected-col');
    this.props.dispatch(pauseTableUpdate());

    const cell = this.props.tableData[cellInfo.index][cellInfo.column.id];

    let newValue = Number(e.target.innerHTML);
    // Input is a number
    if (!Number.isNaN(newValue)) {
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
            this.handleOnBlur(e, cellInfo);
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

