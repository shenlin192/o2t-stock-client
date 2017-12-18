/**
 * Created by shenlin on 16/12/2017.
 */
import axios from 'axios';
import morkResult from './mock';
import { dataTransform } from './utils';
import { colNum, rowNum } from '../global';

export function fetchStock(modifyRecord) {
  return function (dispatch) {
    dispatch({ type: 'FETCH_STOCK' });

    // mock
    // const payload = dataTransform(morkResult, colNum, rowNum, modifyRecord);
    // dispatch({ type: 'FETCH_STOCK_FULFILLED', payload });

    axios.get(`http://localhost:8000/?count=${colNum}`)
      .then((response) => {
        console.log(modifyRecord);
        const payload = dataTransform(response.data, colNum, rowNum, modifyRecord);
        dispatch({ type: 'FETCH_STOCK_FULFILLED', payload });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_STOCK_REJECTED', payload: err });
      });
  };
}
