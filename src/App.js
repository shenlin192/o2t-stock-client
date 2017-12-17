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
  };

  componentWillMount() {
    //get initial data
    this.props.dispatch(fetchStock());

    // update every second
    // setInterval(() => {
    //   this.props.dispatch(fetchStock(this.props.modifyRecord));
    // }, 1000);
  }

  render() {
    return (
      <div className="App">
        <StockChart />
        <StockTable />
      </div>
    );
  }
}


export default connect(store => ({
  modifyRecord: store.stock.modifyRecord,
  pauseTableUpdate: store.stock.pauseTableUpdate,
}))(App);
