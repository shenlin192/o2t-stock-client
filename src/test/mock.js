/**
 * Created by shenlin on 18/12/2017.
 */

// The following data is for testing propose
const responseData = [
  {
    timestamp: 1513445711505,
    index: 1,
    stocks: {
      NASDAQ: 78.8326480027051,
      CAC40: 133.2140589948495,
    },
  },
  {
    timestamp: 1513445712507,
    index: 2,
    stocks: {
      NASDAQ: 78.24316333349704,
      CAC40: 127.10199899840904,
    },
  },
  {
    timestamp: 1513445713510,
    index: 3,
    stocks: {
      NASDAQ: 78.24409108810418,
      CAC40: 127.10190384253495,
    },
  },
  {
    timestamp: 1513445714513,
    index: 4,
    stocks: {
      NASDAQ: 76.39883543412546,
      CAC40: 126.62097506415441,
    },
  },
  {
    timestamp: 1513445715518,
    index: 5,
    stocks: {
      NASDAQ: 75.90687779657414,
      CAC40: 126.62495980215992,
    },
  },
  {
    timestamp: 1513445716519,
    index: 6,
    stocks: {
      NASDAQ: 75.89987497601189,
      CAC40: 93.3550391675596,
    },
  },
  {
    timestamp: 1513445717526,
    index: 7,
    stocks: {
      NASDAQ: 75.90224295533415,
      CAC40: 65.07767661722141,
    },
  },
  {
    timestamp: 1513445718529,
    index: 8,
    stocks: {
      NASDAQ: 75.90229185057478,
      CAC40: 65.07767663085704,
    },
  },
  {
    timestamp: 1513445719533,
    index: 9,
    stocks: {
      NASDAQ: 56.28184706325579,
      CAC40: 65.07780610181972,
    },
  },
  {
    timestamp: 1513445720535,
    index: 10,
    stocks: {
      NASDAQ: 100.01298854002437,
      CAC40: 30.70960139797703,
    },
  },
  {
    timestamp: 1513445721538,
    index: 11,
    stocks: {
      NASDAQ: 100.86695368722705,
      CAC40: 30.70960324289493,
    },
  },
  {
    timestamp: 1513445722542,
    index: 12,
    stocks: {
      NASDAQ: 109.65303616199469,
      CAC40: 40.02292648964222,
    },
  },
  {
    timestamp: 1513445723546,
    index: 13,
    stocks: {
      NASDAQ: 119.5136158595119,
      CAC40: 62.18684763568058,
    },
  },
  {
    timestamp: 1513445724548,
    index: 14,
    stocks: {
      NASDAQ: 119.70539296913418,
      CAC40: 108.6178062919045,
    },
  },
  {
    timestamp: 1513445725551,
    index: 15,
    stocks: {
      NASDAQ: 197.34858203427797,
      CAC40: 108.85245079357144,
    },
  },
  {
    timestamp: 1513445726556,
    index: 16,
    stocks: {
      NASDAQ: 176.70564443535147,
      CAC40: 127.09746464970577,
    },
  },
  {
    timestamp: 1513445727560,
    index: 17,
    stocks: {
      NASDAQ: 181.04332843396645,
      CAC40: 128.43456825549796,
    },
  },
  {
    timestamp: 1513445728563,
    index: 18,
    stocks: {
      NASDAQ: 191.87169397037994,
      CAC40: 128.4346144951191,
    },
  },
  {
    timestamp: 1513445729565,
    index: 19,
    stocks: {
      NASDAQ: 191.85392296018338,
      CAC40: 132.94672804339734,
    },
  },
  {
    timestamp: 1513445730566,
    index: 20,
    stocks: {
      NASDAQ: 191.64460305858978,
      CAC40: 75.30537692320843,
    },
  },
];

const chartData = {
  cac40Chart: [
    {
      x: 1,
      y: 133.21,
    },
    {
      x: 2,
      y: 127.1,
    },
    {
      x: 3,
      y: 127.1,
    },
    {
      x: 4,
      y: 126.62,
    },
    {
      x: 5,
      y: 126.62,
    },
    {
      x: 6,
      y: 93.36,
    },
    {
      x: 7,
      y: 65.08,
    },
    {
      x: 8,
      y: 65.08,
    },
    {
      x: 9,
      y: 65.08,
    },
    {
      x: 10,
      y: 30.71,
    },
    {
      x: 11,
      y: 30.71,
    },
    {
      x: 12,
      y: 40.02,
    },
    {
      x: 13,
      y: 62.19,
    },
    {
      x: 14,
      y: 108.62,
    },
    {
      x: 15,
      y: 108.85,
    },
    {
      x: 16,
      y: 127.1,
    },
    {
      x: 17,
      y: 128.43,
    },
    {
      x: 18,
      y: 128.43,
    },
    {
      x: 19,
      y: 132.95,
    },
    {
      x: 20,
      y: 75.31,
    },
  ],
  nasdaqChart: [
    {
      x: 1,
      y: 78.83,
    },
    {
      x: 2,
      y: 78.24,
    },
    {
      x: 3,
      y: 78.24,
    },
    {
      x: 4,
      y: 76.4,
    },
    {
      x: 5,
      y: 75.91,
    },
    {
      x: 6,
      y: 75.9,
    },
    {
      x: 7,
      y: 75.9,
    },
    {
      x: 8,
      y: 75.9,
    },
    {
      x: 9,
      y: 56.28,
    },
    {
      x: 10,
      y: 100.01,
    },
    {
      x: 11,
      y: 100.87,
    },
    {
      x: 12,
      y: 109.65,
    },
    {
      x: 13,
      y: 119.51,
    },
    {
      x: 14,
      y: 119.71,
    },
    {
      x: 15,
      y: 197.35,
    },
    {
      x: 16,
      y: 176.71,
    },
    {
      x: 17,
      y: 181.04,
    },
    {
      x: 18,
      y: 191.87,
    },
    {
      x: 19,
      y: 191.85,
    },
    {
      x: 20,
      y: 191.64,
    },
  ],
};

const cac40table = [
  {
    index: 1,
    value: 133.21,
  },
  {
    index: 2,
    value: 127.1,
  },
  {
    index: 3,
    value: 127.1,
  },
  {
    index: 4,
    value: 126.62,
  },
  {
    index: 5,
    value: 126.62,
  },
  {
    index: 6,
    value: 93.36,
  },
  {
    index: 7,
    value: 65.08,
  },
  {
    index: 8,
    value: 65.08,
  },
  {
    index: 9,
    value: 65.08,
  },
  {
    index: 10,
    value: 30.71,
  },
  {
    index: 11,
    value: 30.71,
  },
  {
    index: 12,
    value: 40.02,
  },
  {
    index: 13,
    value: 62.19,
  },
  {
    index: 14,
    value: 108.62,
  },
  {
    index: 15,
    value: 108.85,
  },
  {
    index: 16,
    value: 127.1,
  },
  {
    index: 17,
    value: 128.43,
  },
  {
    index: 18,
    value: 128.43,
  },
  {
    index: 19,
    value: 132.95,
  },
  {
    index: 20,
    value: 75.31,
  },
];

const nasdaqTable = [
  {
    index: 1,
    value: 78.83,
  },
  {
    index: 2,
    value: 78.24,
  },
  {
    index: 3,
    value: 78.24,
  },
  {
    index: 4,
    value: 76.4,
  },
  {
    index: 5,
    value: 75.91,
  },
  {
    index: 6,
    value: 75.9,
  },
  {
    index: 7,
    value: 75.9,
  },
  {
    index: 8,
    value: 75.9,
  },
  {
    index: 9,
    value: 56.28,
  },
  {
    index: 10,
    value: 100.01,
  },
  {
    index: 11,
    value: 100.87,
  },
  {
    index: 12,
    value: 109.65,
  },
  {
    index: 13,
    value: 119.51,
  },
  {
    index: 14,
    value: 119.71,
  },
  {
    index: 15,
    value: 197.35,
  },
  {
    index: 16,
    value: 176.71,
  },
  {
    index: 17,
    value: 181.04,
  },
  {
    index: 18,
    value: 191.87,
  },
  {
    index: 19,
    value: 191.85,
  },
  {
    index: 20,
    value: 191.64,
  },
];

const tableData = [
  {
    title: null,
    value0: {
      index: null,
      value: null,
    },
    value1: {
      index: null,
      value: null,
    },
    value2: {
      index: null,
      value: null,
    },
    value3: {
      index: null,
      value: null,
    },
    value4: {
      index: null,
      value: null,
    },
    value5: {
      index: null,
      value: null,
    },
    value6: {
      index: null,
      value: null,
    },
    value7: {
      index: null,
      value: null,
    },
    value8: {
      index: null,
      value: null,
    },
    value9: {
      index: null,
      value: null,
    },
    value10: {
      index: null,
      value: null,
    },
    value11: {
      index: null,
      value: null,
    },
    value12: {
      index: null,
      value: null,
    },
    value13: {
      index: null,
      value: null,
    },
    value14: {
      index: null,
      value: null,
    },
    value15: {
      index: null,
      value: null,
    },
    value16: {
      index: null,
      value: null,
    },
    value17: {
      index: null,
      value: null,
    },
    value18: {
      index: null,
      value: null,
    },
    value19: {
      index: null,
      value: null,
    },
  },
  {
    title: null,
    value0: {
      index: null,
      value: null,
    },
    value1: {
      index: null,
      value: null,
    },
    value2: {
      index: null,
      value: null,
    },
    value3: {
      index: null,
      value: null,
    },
    value4: {
      index: null,
      value: null,
    },
    value5: {
      index: null,
      value: null,
    },
    value6: {
      index: null,
      value: null,
    },
    value7: {
      index: null,
      value: null,
    },
    value8: {
      index: null,
      value: null,
    },
    value9: {
      index: null,
      value: null,
    },
    value10: {
      index: null,
      value: null,
    },
    value11: {
      index: null,
      value: null,
    },
    value12: {
      index: null,
      value: null,
    },
    value13: {
      index: null,
      value: null,
    },
    value14: {
      index: null,
      value: null,
    },
    value15: {
      index: null,
      value: null,
    },
    value16: {
      index: null,
      value: null,
    },
    value17: {
      index: null,
      value: null,
    },
    value18: {
      index: null,
      value: null,
    },
    value19: {
      index: null,
      value: null,
    },
  },
  {
    title: null,
    value0: {
      index: null,
      value: null,
    },
    value1: {
      index: null,
      value: null,
    },
    value2: {
      index: null,
      value: null,
    },
    value3: {
      index: null,
      value: null,
    },
    value4: {
      index: null,
      value: null,
    },
    value5: {
      index: null,
      value: null,
    },
    value6: {
      index: null,
      value: null,
    },
    value7: {
      index: null,
      value: null,
    },
    value8: {
      index: null,
      value: null,
    },
    value9: {
      index: null,
      value: null,
    },
    value10: {
      index: null,
      value: null,
    },
    value11: {
      index: null,
      value: null,
    },
    value12: {
      index: null,
      value: null,
    },
    value13: {
      index: null,
      value: null,
    },
    value14: {
      index: null,
      value: null,
    },
    value15: {
      index: null,
      value: null,
    },
    value16: {
      index: null,
      value: null,
    },
    value17: {
      index: null,
      value: null,
    },
    value18: {
      index: null,
      value: null,
    },
    value19: {
      index: null,
      value: null,
    },
  },
  {
    title: null,
    value0: {
      index: null,
      value: null,
    },
    value1: {
      index: null,
      value: null,
    },
    value2: {
      index: null,
      value: null,
    },
    value3: {
      index: null,
      value: null,
    },
    value4: {
      index: null,
      value: null,
    },
    value5: {
      index: null,
      value: null,
    },
    value6: {
      index: null,
      value: null,
    },
    value7: {
      index: null,
      value: null,
    },
    value8: {
      index: null,
      value: null,
    },
    value9: {
      index: null,
      value: null,
    },
    value10: {
      index: null,
      value: null,
    },
    value11: {
      index: null,
      value: null,
    },
    value12: {
      index: null,
      value: null,
    },
    value13: {
      index: null,
      value: null,
    },
    value14: {
      index: null,
      value: null,
    },
    value15: {
      index: null,
      value: null,
    },
    value16: {
      index: null,
      value: null,
    },
    value17: {
      index: null,
      value: null,
    },
    value18: {
      index: null,
      value: null,
    },
    value19: {
      index: null,
      value: null,
    },
  },
  {
    title: null,
    value0: {
      index: null,
      value: null,
    },
    value1: {
      index: null,
      value: null,
    },
    value2: {
      index: null,
      value: null,
    },
    value3: {
      index: null,
      value: null,
    },
    value4: {
      index: null,
      value: null,
    },
    value5: {
      index: null,
      value: null,
    },
    value6: {
      index: null,
      value: null,
    },
    value7: {
      index: null,
      value: null,
    },
    value8: {
      index: null,
      value: null,
    },
    value9: {
      index: null,
      value: null,
    },
    value10: {
      index: null,
      value: null,
    },
    value11: {
      index: null,
      value: null,
    },
    value12: {
      index: null,
      value: null,
    },
    value13: {
      index: null,
      value: null,
    },
    value14: {
      index: null,
      value: null,
    },
    value15: {
      index: null,
      value: null,
    },
    value16: {
      index: null,
      value: null,
    },
    value17: {
      index: null,
      value: null,
    },
    value18: {
      index: null,
      value: null,
    },
    value19: {
      index: null,
      value: null,
    },
  },
  {
    title: null,
    value0: {
      index: null,
      value: null,
    },
    value1: {
      index: null,
      value: null,
    },
    value2: {
      index: null,
      value: null,
    },
    value3: {
      index: null,
      value: null,
    },
    value4: {
      index: null,
      value: null,
    },
    value5: {
      index: null,
      value: null,
    },
    value6: {
      index: null,
      value: null,
    },
    value7: {
      index: null,
      value: null,
    },
    value8: {
      index: null,
      value: null,
    },
    value9: {
      index: null,
      value: null,
    },
    value10: {
      index: null,
      value: null,
    },
    value11: {
      index: null,
      value: null,
    },
    value12: {
      index: null,
      value: null,
    },
    value13: {
      index: null,
      value: null,
    },
    value14: {
      index: null,
      value: null,
    },
    value15: {
      index: null,
      value: null,
    },
    value16: {
      index: null,
      value: null,
    },
    value17: {
      index: null,
      value: null,
    },
    value18: {
      index: null,
      value: null,
    },
    value19: {
      index: null,
      value: null,
    },
  },
  {
    title: null,
    value0: {
      index: null,
      value: null,
    },
    value1: {
      index: null,
      value: null,
    },
    value2: {
      index: null,
      value: null,
    },
    value3: {
      index: null,
      value: null,
    },
    value4: {
      index: null,
      value: null,
    },
    value5: {
      index: null,
      value: null,
    },
    value6: {
      index: null,
      value: null,
    },
    value7: {
      index: null,
      value: null,
    },
    value8: {
      index: null,
      value: null,
    },
    value9: {
      index: null,
      value: null,
    },
    value10: {
      index: null,
      value: null,
    },
    value11: {
      index: null,
      value: null,
    },
    value12: {
      index: null,
      value: null,
    },
    value13: {
      index: null,
      value: null,
    },
    value14: {
      index: null,
      value: null,
    },
    value15: {
      index: null,
      value: null,
    },
    value16: {
      index: null,
      value: null,
    },
    value17: {
      index: null,
      value: null,
    },
    value18: {
      index: null,
      value: null,
    },
    value19: {
      index: null,
      value: null,
    },
  },
  {
    title: null,
    value0: {
      index: null,
      value: null,
    },
    value1: {
      index: null,
      value: null,
    },
    value2: {
      index: null,
      value: null,
    },
    value3: {
      index: null,
      value: null,
    },
    value4: {
      index: null,
      value: null,
    },
    value5: {
      index: null,
      value: null,
    },
    value6: {
      index: null,
      value: null,
    },
    value7: {
      index: null,
      value: null,
    },
    value8: {
      index: null,
      value: null,
    },
    value9: {
      index: null,
      value: null,
    },
    value10: {
      index: null,
      value: null,
    },
    value11: {
      index: null,
      value: null,
    },
    value12: {
      index: null,
      value: null,
    },
    value13: {
      index: null,
      value: null,
    },
    value14: {
      index: null,
      value: null,
    },
    value15: {
      index: null,
      value: null,
    },
    value16: {
      index: null,
      value: null,
    },
    value17: {
      index: null,
      value: null,
    },
    value18: {
      index: null,
      value: null,
    },
    value19: {
      index: null,
      value: null,
    },
  },
  {
    title: 'CAC40',
    value0: {
      index: 1,
      value: 133.21,
      type: 'cac40',
    },
    value1: {
      index: 2,
      value: 127.1,
      type: 'cac40',
    },
    value2: {
      index: 3,
      value: 127.1,
      type: 'cac40',
    },
    value3: {
      index: 4,
      value: 126.62,
      type: 'cac40',
    },
    value4: {
      index: 5,
      value: 126.62,
      type: 'cac40',
    },
    value5: {
      index: 6,
      value: 93.36,
      type: 'cac40',
    },
    value6: {
      index: 7,
      value: 65.08,
      type: 'cac40',
    },
    value7: {
      index: 8,
      value: 65.08,
      type: 'cac40',
    },
    value8: {
      index: 9,
      value: 65.08,
      type: 'cac40',
    },
    value9: {
      index: 10,
      value: 30.71,
      type: 'cac40',
    },
    value10: {
      index: 11,
      value: 30.71,
      type: 'cac40',
    },
    value11: {
      index: 12,
      value: 40.02,
      type: 'cac40',
    },
    value12: {
      index: 13,
      value: 62.19,
      type: 'cac40',
    },
    value13: {
      index: 14,
      value: 108.62,
      type: 'cac40',
    },
    value14: {
      index: 15,
      value: 108.85,
      type: 'cac40',
    },
    value15: {
      index: 16,
      value: 127.1,
      type: 'cac40',
    },
    value16: {
      index: 17,
      value: 128.43,
      type: 'cac40',
    },
    value17: {
      index: 18,
      value: 128.43,
      type: 'cac40',
    },
    value18: {
      index: 19,
      value: 132.95,
      type: 'cac40',
    },
    value19: {
      index: 20,
      value: 75.31,
      type: 'cac40',
    },
  },
  {
    title: 'NASDAQ',
    value0: {
      index: 1,
      value: 78.83,
      type: 'nasdaq',
    },
    value1: {
      index: 2,
      value: 78.24,
      type: 'nasdaq',
    },
    value2: {
      index: 3,
      value: 78.24,
      type: 'nasdaq',
    },
    value3: {
      index: 4,
      value: 76.4,
      type: 'nasdaq',
    },
    value4: {
      index: 5,
      value: 75.91,
      type: 'nasdaq',
    },
    value5: {
      index: 6,
      value: 75.9,
      type: 'nasdaq',
    },
    value6: {
      index: 7,
      value: 75.9,
      type: 'nasdaq',
    },
    value7: {
      index: 8,
      value: 75.9,
      type: 'nasdaq',
    },
    value8: {
      index: 9,
      value: 56.28,
      type: 'nasdaq',
    },
    value9: {
      index: 10,
      value: 100.01,
      type: 'nasdaq',
    },
    value10: {
      index: 11,
      value: 100.87,
      type: 'nasdaq',
    },
    value11: {
      index: 12,
      value: 109.65,
      type: 'nasdaq',
    },
    value12: {
      index: 13,
      value: 119.51,
      type: 'nasdaq',
    },
    value13: {
      index: 14,
      value: 119.71,
      type: 'nasdaq',
    },
    value14: {
      index: 15,
      value: 197.35,
      type: 'nasdaq',
    },
    value15: {
      index: 16,
      value: 176.71,
      type: 'nasdaq',
    },
    value16: {
      index: 17,
      value: 181.04,
      type: 'nasdaq',
    },
    value17: {
      index: 18,
      value: 191.87,
      type: 'nasdaq',
    },
    value18: {
      index: 19,
      value: 191.85,
      type: 'nasdaq',
    },
    value19: {
      index: 20,
      value: 191.64,
      type: 'nasdaq',
    },
  },
];

const oneRowEmptyTable = [
  {
    title: null,
    value0: {
      index: null,
      value: null,
    },
    value1: {
      index: null,
      value: null,
    },
    value2: {
      index: null,
      value: null,
    },
    value3: {
      index: null,
      value: null,
    },
    value4: {
      index: null,
      value: null,
    },
    value5: {
      index: null,
      value: null,
    },
    value6: {
      index: null,
      value: null,
    },
    value7: {
      index: null,
      value: null,
    },
    value8: {
      index: null,
      value: null,
    },
    value9: {
      index: null,
      value: null,
    },
    value10: {
      index: null,
      value: null,
    },
    value11: {
      index: null,
      value: null,
    },
    value12: {
      index: null,
      value: null,
    },
    value13: {
      index: null,
      value: null,
    },
    value14: {
      index: null,
      value: null,
    },
    value15: {
      index: null,
      value: null,
    },
    value16: {
      index: null,
      value: null,
    },
    value17: {
      index: null,
      value: null,
    },
    value18: {
      index: null,
      value: null,
    },
    value19: {
      index: null,
      value: null,
    },
  },
];

const initialStock = {
  fetching: false,
  fetched: false,
  error: null,
  chartData: {
    cac40Chart: [
      {
        x: 1,
        y: 1,
      },
    ],
    nasdaqChart: [
      {
        x: 1,
        y: 1,
      },
    ],
  },
  tableData: oneRowEmptyTable,
  modifyRecord: [],
  pauseTableUpdate: false,
};

const fullFilledStock = {
  chartData,
  error: null,
  fetched: true,
  fetching: false,
  modifyRecord: [],
  pauseTableUpdate: false,
  tableData,
};

export {
  responseData,
  chartData,
  cac40table,
  nasdaqTable,
  tableData,
  oneRowEmptyTable,
  initialStock,
  fullFilledStock,
};
