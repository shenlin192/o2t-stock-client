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


// modifyRecord = [
//   {index:1, type:'cac40', value:1},
//   {index:1, type:'cac40', value:3},
//   {index:1, type:'cac40', value:4},
//   {index:1, type:'nasdaq', value:1}
//   {index:1, type:'nasdaq', value:2}
// ]


function keepUserModification(result, modifyRecord) {
  const newResult = result.map((e) => {
    //find out all relative records
    const relativeRecords = modifyRecord.filter(record => record.index === e.index);

    if (relativeRecords.length) {
      const cac40Records = relativeRecords.filter(record => record.type === 'cac40');
      const nasdaqRecords = relativeRecords.filter(record => record.type === 'nasdaq');
      // update by last record value
      if (cac40Records.length) {
        e.stocks.CAC40 = cac40Records[cac40Records.length - 1].value;
      }

      if (nasdaqRecords.length) {
        e.stocks.NASDAQ = nasdaqRecords[nasdaqRecords.length - 1].value;
      }
    }
    return e;
  });
  return newResult;
}


/**
 *
 */
export function dataTransform(result, colNum, rowNum, modifyRecord) {
  const newResult = keepUserModification(result, modifyRecord);
  // make table data
  const cac40Table = newResult.map(e => (
    {
      index: e.index,
      value: Number(parseFloat(e.stocks.CAC40).toFixed(2)),
    }));

  const nasdaqTable = newResult.map(e => (
    {
      index: e.index,
      value: Number(parseFloat(e.stocks.NASDAQ).toFixed(2)),
    }));

  const tableData = tableDataMaker(colNum, rowNum, cac40Table, nasdaqTable);

  // make chart data
  const cac40Chart = newResult.map((e, i) => (
    {
      x: i + 1,
      y: Number(parseFloat(e.stocks.CAC40).toFixed(2)),
    }));

  const nasdaqChart = newResult.map((e, i) => (
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
