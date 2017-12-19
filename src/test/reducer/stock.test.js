/**
 * Created by shenlin on 18/12/2017.
 */
import reducer from '../../reducers/stockReducer';
import * as data from '../mock';

describe('Test initial state', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(data.initialStock);
  });
});


describe('Test MODIFY_RECORD', () => {
  it('should handle modification', () => {
    const action = {
      type: 'MODIFY_RECORD',
      payload: {
        index: 1,
        type: 'cac40',
        value: 50,
      },
    };

    expect(reducer(undefined, action).modifyRecord).toEqual([
      {
        index: 1,
        type: 'cac40',
        value: 50,
      },
    ]);
  });
});


describe('Test FETCH_STOCK_FULFILLED', () => {
  it('should handle pauseTableUpdate false', () => {
    const action = {
      type: 'FETCH_STOCK_FULFILLED',
      payload: {
        chartData: 'chartData',
        tableData: 'tableData',
      },
    };

    expect(reducer({ pauseTableUpdate: false }, action)).toEqual({
      fetching: false,
      fetched: true,
      pauseTableUpdate: false,
      chartData: 'chartData',
      tableData: 'tableData',
    });

    expect(reducer({ pauseTableUpdate: true }, action)).toEqual({
      fetching: false,
      fetched: true,
      pauseTableUpdate: true,
      chartData: 'chartData',
    });

  });
});
