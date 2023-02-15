const IS_STOP_FETCH = 'IS_STOP_FETCH';

const initialState = {
  isStop: false
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_STOP_FETCH:
      return {
        ...state,
        isStop: !state.isStop
      };
    default: {
      return state;
    }
  }
};

export const isStopFetch = () => ({ type: IS_STOP_FETCH });
