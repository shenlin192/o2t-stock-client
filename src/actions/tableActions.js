/**
 * Created by shenlin on 16/12/2017.
 */

export function modifyCac40(index, value) {
  return {
    type: 'MODIFY_CAC40',
    payload: {
      index,
      value,
    },
  };
}


export function modifyRecord(index, type, newValue) {
  return {
    type: 'MODIFY_RECORD',
    payload: {
      index,
      type,
      newValue,
    },
  };
}


export function pauseTableUpdate() {
  return {
    type: 'PAUSE_TABLE_UPDATE',
  };
}
