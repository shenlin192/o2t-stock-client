/**
 * Created by shenlin on 16/12/2017.
 */
import axios from 'axios';
import morkResult from './mork';

export function fetchStock() {
  return function (dispatch) {
    dispatch({ type: 'FETCH_STOCK' });

    //mork
    const payload = dataTransform(morkResult);
    dispatch({ type: 'FETCH_STOCK_FULFILLED', payload });

    // axios.get('http://localhost:8000/?count=20')
    //   .then((response) => {
    //     const payload = dataTransform(response.data);
    //     dispatch({ type: 'FETCH_STOCK_FULFILLED', payload });
    //   })
    //   .catch((err) => {
    //     dispatch({ type: 'FETCH_STOCK_REJECTED', payload: err });
    //   });
  };
}

function dataTransform(result) {
  const stock = result.map(e => e.stocks);
  const cac40Num = stock.map(e => Number(parseFloat(e.CAC40).toFixed(2)));
  const nasdaqNum = stock.map(e => Number(parseFloat(e.NASDAQ).toFixed(2)));

  const cac40 = cac40Num.map((e, i) => ({ x: i + 1, y: e }));
  const nasdaq = nasdaqNum.map((e, i) => ({ x: i + 1, y: e }));

  const payload = {
    cac40,
    nasdaq,
  };
  return payload;
}
