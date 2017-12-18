/**
 * Created by shenlin on 18/12/2017.
 */
import * as utils from '../../actions/utils';
import * as data from '../mock';
import { colNum, rowNum } from '../../global';


describe('Test action utils emptyTableMaker', () => {
  it('should create 1 row 20 value column empty table', () => {
    expect(utils.emptyTableMaker(colNum, 1)).toEqual(data.oneRowEmptyTable);
  });
});


describe('Test action utils forceUpdateChart', () => {
  it('should update cac40 chart data', () => {
    // index 3 is in array[2]
    expect(utils.forceUpdateChart(data.chartData.cac40Chart, 3, 10)[2].y).toBe(10);
  });

  it('should update nasdaq chart data', () => {
    // index 3 is in array[2]
    expect(utils.forceUpdateChart(data.chartData.nasdaqChart, 3, 10)[2].y).toBe(10);
  });

  it('should keep the same if index not found', () => {
    expect(utils.forceUpdateChart(data.chartData.cac40Chart, -1, 10))
      .toEqual(data.chartData.cac40Chart);
  });
});


describe('Test action utils forceUpdateTable', () => {
  it('should update cac40 table data', () => {
    // index 3 is in colum value 2
    expect(utils.forceUpdateTable(data.tableData[8], 3, 10).value2.value).toBe(10);
  });

  it('should update nasdaq table data', () => {
    // index 4 is in colum value 3
    expect(utils.forceUpdateTable(data.tableData[9], 4, 20).value3.value).toBe(20);
  });

  it('should keep the same if index not found', () => {
    expect(utils.forceUpdateTable(data.tableData[8], -2, 10))
      .toEqual(data.tableData[8]);
  });
});


describe('Test action utils tableDataMaker', () => {
  it('should create table data', () => {
    expect(utils.tableDataMaker(colNum, rowNum, data.cac40table, data.nasdaqTable))
      .toEqual(data.tableData);
  });
});


describe('Test action utils keepUserModification', () => {
  it('should handle one record', () => {
    const records = [{ index: 1, type: 'cac40', value: 15 }];
    expect(utils.keepUserModification(data.responseData, records)[0].stocks.CAC40)
      .toBe(15);
  });

  it('should update by the last record', () => {
    const records = [
      { index: 1, type: 'cac40', value: 15 },
      { index: 1, type: 'cac40', value: 20 },
    ];
    expect(utils.keepUserModification(data.responseData, records)[0].stocks.CAC40)
      .toBe(20);
  });

  it('should handle different types', () => {
    const records = [
      { index: 1, type: 'cac40', value: 15 },
      { index: 1, type: 'cac40', value: 20 },
      { index: 1, type: 'nasdaq', value: 5 },
    ];
    expect(utils.keepUserModification(data.responseData, records)[0].stocks.CAC40)
      .toBe(20);
    expect(utils.keepUserModification(data.responseData, records)[0].stocks.NASDAQ)
      .toBe(5);
  });

  it('should keep the same if record not found', () => {
    const records = [
      { index: -1, type: 'cac40', value: 15 },
    ];
    expect(utils.keepUserModification(data.responseData, records)).toEqual(data.responseData);
  });
});


describe('Test action utils dataTransform', () => {
  it('should create table data', () => {
    expect(utils.dataTransform(data.responseData, colNum, rowNum, []))
      .toEqual({ chartData: data.chartData, tableData: data.tableData });
  });
});

