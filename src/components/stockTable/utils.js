/**
 * Created by shenlin on 16/12/2017.
 */

/**
 * @returns array in the following shape [
 * { Header: 'Title', accessor: 'title' },
 * { Header: 'Value0', accessor: 'value0.value' },
 * ...
 * { Header: 'ValueN', accessor: 'valueN.value' },
 * ]
 */

//TODO change value form to {value0: {index:1, value: 1}}

export function columnsMaker(colNum, cellMaker) {
  const baseArray = [...Array(colNum).keys()];

  const columns = baseArray.map(e => (
    {
      Header: `Value${e}`, accessor: `value${e}.value`, id: `value${e}`, Cell: cellMaker, width: '5vw', minWidth: 30,
    }
  ));

  columns.unshift({
    Header: 'Title', accessor: 'title', width: '5vw', minWidth: 30,
  });

  return columns;
}
