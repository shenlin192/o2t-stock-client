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
export function columnsMaker(colNum, cellMaker) {
  const baseArray = [...Array(colNum).keys()];

  const columns = baseArray.map(e => (
    {
      Header: `Value${e}`, accessor: `value${e}.value`, id: `value${e}`, Cell: cellMaker, index: e,
    }
  ));

  columns.unshift({
    Header: 'Title', accessor: 'title',
  });

  return columns;
}
