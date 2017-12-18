/**
 * Created by shenlin on 16/12/2017.
 */
import { forceUpdateChart, forceUpdateTable } from './utils';

export function modifyRecord(index, type, value) {
  return {
    type: 'MODIFY_RECORD',
    payload: {
      index,
      type,
      value,
    },
  };
}

export function pauseTableUpdate() {
  return {
    type: 'PAUSE_TABLE_UPDATE',
  };
}

export function forceUpdate(index, type, value, chartData, tableData) {
  let cac40Chart = [...chartData.cac40Chart];
  let nasdaqChart = [...chartData.nasdaqChart];
  const tempTable = [...tableData];

  if (type === 'cac40') {
    cac40Chart = forceUpdateChart(chartData.cac40Chart, index, value);
    tempTable[8] = forceUpdateTable(tempTable[8], index, value);
  } else {
    nasdaqChart = forceUpdateChart(chartData.nasdaqChart, index, value);
    tempTable[9] = forceUpdateTable(tempTable[9], index, value);
  }

  return {
    type: 'FORCE_UPDATE',
    payload: {
      chartData: {
        cac40Chart,
        nasdaqChart,
      },
      tableData: tempTable,
    },
  };
}

