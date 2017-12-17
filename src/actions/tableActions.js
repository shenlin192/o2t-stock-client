/**
 * Created by shenlin on 16/12/2017.
 */

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

function forceUpdateChart(data, index, value) {
  return data.map((e) => {
    if (e.x === index) {
      e.y = value;
    }
    return e;
  });
}

function forceUpdateTable(data, index, value) {
  const temp = { ...data };
  const keys = Object.keys(temp);

  for (let i = 0; i < keys.length; i += 1) {
    if (temp[keys[i]].index === index) {
      temp[keys[i]].value = value;
    }
  }
  return temp;
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

