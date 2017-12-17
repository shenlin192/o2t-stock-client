/**
 * Created by shenlin on 16/12/2017.
 */

export function modifyRecord(index, type, value) {
  return {
    type: 'MODIFY_RECORD',
    payload: {
      index,
      type,
      value,
    },
  };
}


export function pauseTableUpdate() {
  return {
    type: 'PAUSE_TABLE_UPDATE',
  };
}
