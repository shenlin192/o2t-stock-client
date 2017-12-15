import React, { Component } from 'react';
import { XYPlot, HorizontalGridLines, XAxis, YAxis, LineSeries } from 'react-vis';
import './App.css';
import '../node_modules/react-vis/dist/style.css';


class App extends Component {
  render() {
    const data = [
      { x: 0, y: 8 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 1 },
      { x: 5, y: 7 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 },
    ];
    return (
      <div className="App">
        <XYPlot height={300} width={300} xDomain={[9, 0]} stroke="red">
          <LineSeries data={data} />
          <HorizontalGridLines />
          <XAxis />
          <YAxis style={{
            line: { stroke: 'none' },
            ticks: { stroke: '#ADDDE1' },
            text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600 },
          }}
          />
        </XYPlot>
      </div>
    );
  }
}

export default App;
