import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StockChart from './components/stockChart';
import StockTable from './components/stockTable';
import { fetchStock } from './actions/appActions';
import './global';
import './App.css';
import '../node_modules/react-vis/dist/style.css';


class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    modifyRecord: PropTypes.arrayOf(PropTypes.shape({
      index: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })).isRequired,
  };

  componentWillMount() {
    //get initial data
    this.props.dispatch(fetchStock(this.props.modifyRecord));

    // update every second
    setInterval(() => {
      this.props.dispatch(fetchStock(this.props.modifyRecord));
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <div className="chart-container">
          <StockChart />
        </div>
        <div className="table-container">
          <StockTable />
        </div>

      </div>
    );
  }
}


export default connect(store => ({
  modifyRecord: store.stock.modifyRecord,
  pauseTableUpdate: store.stock.pauseTableUpdate,
}))(App);
