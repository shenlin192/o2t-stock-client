/**
 * Created by shenlin on 15/12/2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlexibleWidthXYPlot, HorizontalGridLines, XAxis, YAxis, LineSeries, DiscreteColorLegend } from 'react-vis';
import { connect } from 'react-redux';
import './styles.css';

class StockChart extends Component {
  static propTypes = {
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

  render() {
    return (
      <FlexibleWidthXYPlot height={300} >
        <HorizontalGridLines style={{ stroke: '#cecece' }} />
        <XAxis style={{ line: { stroke: '#cecece' } }} tickSize={0} />
        <YAxis style={{ line: { stroke: 'none' } }} />

        <LineSeries
          data={this.props.chartData.cac40Chart}
          style={{ stroke: '#629fd4' }}
        />
        <LineSeries
          data={this.props.chartData.nasdaqChart}
          style={{ stroke: '#eb7d3c' }}
        />

        <DiscreteColorLegend
          orientation="horizontal"
          items={[
              { title: 'CAC40', color: '#629fd4' },
              { title: 'NASDAQ', color: '#eb7d3c' },
              ]}
        />
      </FlexibleWidthXYPlot>
    );
  }
}

export default connect(store => ({
  chartData: store.stock.chartData,
}))(StockChart);
