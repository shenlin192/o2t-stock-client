/**
 * Created by shenlin on 16/12/2017.
 */

/**
 * @returns array in the following shape [
 * { title: null, value0: {index: null, value: null}, ..., valueN:  {index: null, value: null}},
 * ...
 * { title: null, value0: {index: null, value: null}, ..., valueN:  {index: null, value: null}},
 * ]
 */
export function emptyTableMaker(colNum, rowNum) {
  const oneRow = {
    title: null,
  };
  for (let i = 0; i < colNum; i += 1) {
    oneRow[`value${i}`] = { index: null, value: null };
  }
  return Array(rowNum).fill(oneRow);
}

/**
 * @returns array in the following shape [
 * { title: null, value0: {index: null, value: null}, ..., valueN:  {index: null, value: null}},
 * ...
 * { title: null, value0: {index: X, value: Y}, ..., valueN:  {index: N, value: M}}, // cac40
 * { title: null, value0: {index: X, value: Y}, ..., valueN:  {index: N, value: M}}, // nasdaq
 * ]
 */
export function tableDataMaker(colNum, rowNum, cac40, nasdaq) {
  const table = emptyTableMaker(colNum, rowNum - 2);
  const cac40Row = {
    title: 'CAC40',
  };
  const nasdaqRow = {
    title: 'NASDAQ',
  };
  for (let i = 0; i < colNum; i += 1) {
    if (cac40[i]) {
      cac40Row[`value${i}`] = { ...cac40[i], type: 'cac40' };
    } else {
      cac40Row[`value${i}`] = { index: null, value: null };
    }

    if (nasdaq[i]) {
      nasdaqRow[`value${i}`] = { ...nasdaq[i], type: 'nasdaq' };
    } else {
      nasdaqRow[`value${i}`] = { index: null, value: null };
    }
  }
  table.push(cac40Row);
  table.push(nasdaqRow);
  console.log(table);
  return table;
}


export function dataTransform(result, colNum, rowNum, modifyRecord) {
  // make table data
  const cac40Table = result.map(e => (
    {
      index: e.index,
      value: Number(parseFloat(e.stocks.CAC40).toFixed(2)),
    }));

  const nasdaqTable = result.map(e => (
    {
      index: e.index,
      value: Number(parseFloat(e.stocks.NASDAQ).toFixed(2)),
    }));

  const tableData = tableDataMaker(colNum, rowNum, cac40Table, nasdaqTable);

  // make chart data
  const cac40Chart = result.map((e, i) => (
    {
      x: i + 1,
      y: Number(parseFloat(e.stocks.CAC40).toFixed(2)),
    }));

  const nasdaqChart = result.map((e, i) => (
    {
      x: i + 1,
      y: Number(parseFloat(e.stocks.NASDAQ).toFixed(2)),
    }));

  const chartData = {
    cac40Chart,
    nasdaqChart,
  };

  return {
    chartData,
    tableData,
  };
}
