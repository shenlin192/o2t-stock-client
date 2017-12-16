import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import StockChart from './components/stockChart';
import StockTable from './components/stockTable';
import { fetchStock } from './actions/appActions';
import './global';
import './App.css';
import '../node_modules/react-vis/dist/style.css';


class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  //get initial data
  componentWillMount() {
    this.props.dispatch(fetchStock());
  }
  render() {
    return (
      <div className="App">
        <StockTable />
      </div>
    );
  }
}


export default connect(store => ({}))(App);
