const IS_CHECKED_FILTER_ALL_TRANSFER = 'FILTER_ALL_TRANSFER';
const IS_CHECKED_FILTER_NO_TRANSFER = 'IS_CHECKED_FILTER_NO_TRANSFER';
const IS_CHECKED_FILTER_ONE_TRANSFER = 'IS_CHECKED_FILTER_ONE_TRANSFER';
const IS_CHECKED_FILTER_TWO_TRANSFER = 'IS_CHECKED_FILTER_TWO_TRANSFER';
const IS_CHECKED_FILTER_THREE_TRANSFER = 'IS_CHECKED_FILTER_THREE_TRANSFER';

const initialState = {
  isAllTransfersChecked: true,
  isNoTransfersChecked: true,
  isOneTransfersChecked: true,
  isTwoTransfersChecked: true,
  isThreeTransfersChecked: true
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_CHECKED_FILTER_ALL_TRANSFER: {
      return {
        ...state,
        isAllTransfersChecked: !action.payload,
        isNoTransfersChecked: !action.payload,
        isOneTransfersChecked: !action.payload,
        isTwoTransfersChecked: !action.payload,
        isThreeTransfersChecked: !action.payload
      };
    }
    case IS_CHECKED_FILTER_NO_TRANSFER: {
      return {
        ...state,
        isAllTransfersChecked: false,
        isNoTransfersChecked: !state.isNoTransfersChecked
      };
    }
    case IS_CHECKED_FILTER_ONE_TRANSFER: {
      return {
        ...state,
        isAllTransfersChecked: false,
        isOneTransfersChecked: !state.isOneTransfersChecked
      };
    }
    case IS_CHECKED_FILTER_TWO_TRANSFER: {
      return {
        ...state,
        isAllTransfersChecked: false,
        isTwoTransfersChecked: !state.isTwoTransfersChecked
      };
    }
    case IS_CHECKED_FILTER_THREE_TRANSFER: {
      return {
        ...state,
        isAllTransfersChecked: false,
        isThreeTransfersChecked: !state.isThreeTransfersChecked
      };
    }
    default:
      return state;
  }
};

export const isAllStopsChecked = (payload) => ({
  type: IS_CHECKED_FILTER_ALL_TRANSFER,
  payload
});
export const isNoStopsChecked = () => ({ type: IS_CHECKED_FILTER_NO_TRANSFER });
export const isOneStopsChecked = () => ({
  type: IS_CHECKED_FILTER_ONE_TRANSFER
});
export const isTwoStopsChecked = () => ({
  type: IS_CHECKED_FILTER_TWO_TRANSFER
});
export const isThreeStopsChecked = () => ({
  type: IS_CHECKED_FILTER_THREE_TRANSFER
});
