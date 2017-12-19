/**
 * Created by shenlin on 18/12/2017.
 */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as data from '../mock';
import { fetchStock } from '../../actions/appActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);


describe('async actions', () => {
  mock.onGet('http://localhost:8000/?count=20').reply(200, data.responseData);

  it('creates FETCH_STOCK_FULFILLED when fetching stock has been done', () => {
    const expectedActions = [
      { type: 'FETCH_STOCK' },
      {
        type: 'FETCH_STOCK_FULFILLED',
        payload: {
          chartData: data.chartData,
          tableData: data.tableData,
        }, 
      },
    ];

    const store = mockStore({});

    return store.dispatch(fetchStock([])).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
