/**
 * Created by shenlin on 16/12/2017.
 */

/**
 * @returns array in the following shape [
 * { Header: 'Title', accessor: 'title' },
 * { Header: 'Value0', accessor: 'value0' },
 * ...
 * { Header: 'ValueN', accessor: 'valueN' },
 * ]
 */
export function columnsMaker(colNum, cellMaker) {
  const baseArray = [...Array(colNum).keys()];

  const columns = baseArray.map(e => (
    {
      Header: `Value${e}`, accessor: `value${e}`, Cell: cellMaker, width: '5vw', minWidth: 30,
    }
  ));

  columns.unshift({
    Header: 'Title', accessor: 'title', width: '5vw', minWidth: 30,
  });

  return columns;
}


/**
 * @returns array in the following shape [
 * { title: null, value0: null, ..., valueN: null},
 * ...
 * { title: null, value0: null, ..., valueN: null},
 * ]
 */
export function dataMaker(colNum, rowNum) {
  const oneRow = {
    title: null,
  };
  for (let i = 0; i < colNum; i += 1) {
    oneRow[`value${i}`] = null;
  }
  return Array(rowNum).fill(oneRow);
}

