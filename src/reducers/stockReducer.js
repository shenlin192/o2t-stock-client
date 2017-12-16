/**
 * Created by shenlin on 15/12/2017.
 */
export default function reducer(state = {
  cac40: [{ x: 1, y: 1 }],
  nasdaq: [{ x: 1, y: 1 }],
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_STOCK': {
      return { ...state, fetching: true };
    }
    case 'FETCH_STOCK_REJECTED': {
      return { ...state, fetching: false, error: action.payload };
    }
    case 'FETCH_STOCK_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        cac40: action.payload.cac40,
        nasdaq: action.payload.nasdaq,
      };
    }
  }
  return state;
}
