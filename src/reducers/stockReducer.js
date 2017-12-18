/**
 * Created by shenlin on 15/12/2017.
 */
import { emptyTableMaker } from '../actions/utils';
import { colNum } from '../global';

const initialTable = emptyTableMaker(colNum, 1);

export default function reducer(state = {
  fetching: false,
  fetched: false,
  error: null,
  chartData: {
    cac40Chart: [{ x: 1, y: 1 }],
    nasdaqChart: [{ x: 1, y: 1 }],
  },
  tableData: initialTable,
  modifyRecord: [],
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
    case 'FORCE_UPDATE': {
      return {
        ...state,
        chartData: action.payload.chartData,
        tableData: action.payload.tableData,
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
    default: {
      return {
        ...state,
      };
    }
  }
}
