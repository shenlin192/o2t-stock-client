/**
 * Created by shenlin on 15/12/2017.
 */
import { emptyTableMaker, tableDataMaker } from '../actions/utils';
import { colNum } from '../global';

const initialTable = emptyTableMaker(colNum, 1);

export default function reducer(state = {
  fetching: false,
  fetched: false,
  error: null,
  chartData: {
    cac40: [{ x: 1, y: 1 }],
    nasdaq: [{ x: 1, y: 1 }],
  },
  tableData: initialTable,
  modifyRecord: [{
    index: 0,
    type: 'cac40',
    value: 0,
  }],
  pauseTableUpdate: false,
}, action) {
  switch (action.type) {
    case 'FETCH_STOCK': {
      return { ...state, fetching: true };
    }
    case 'FETCH_STOCK_REJECTED': {
      return { ...state, fetching: false, error: action.payload };
    }
    case 'FETCH_STOCK_FULFILLED': {
      if (state.pauseTableUpdate) {
        return {
          ...state,
          fetching: false,
          fetched: true,
          chartData: action.payload.chartData,
        };
      }
      return {
        ...state,
        fetching: false,
        fetched: true,
        chartData: action.payload.chartData,
        tableData: action.payload.tableData,
      };
    }
    case 'TEST': {
      return {
        ...state,
        tableData: tableDataMaker(
          colNum, 10,
          [{ index: 1, value: 1 }, { index: 10, value: 5 }],
          [{ index: 1, value: 3 }, { index: 10, value: 4 }],
        ),
      };
    }
    case 'MODIFY_RECORD': {
      return {
        ...state,
        modifyRecord: [...state.modifyRecord, action.payload],
      };
    }
    case 'PAUSE_TABLE_UPDATE': {
      return {
        ...state,
        pauseTableUpdate: !state.pauseTableUpdate,
      };
    }
  }
  return state;
}
