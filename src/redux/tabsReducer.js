const CHEAP_TICKETS = 'CHEAP_TICKETS';
const EXPENSIVE_TICKETS = 'EXPENSIVE_TICKETS';
const OPTIMAL_TICKETS = 'OPTIMAL_TICKETS';

const initialState = {
  isTabCheapTicketsChecked: true,
  isTabExpensiveTicketsChecked: false,
  isTabOptimalTicketsChecked: false
};

export const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHEAP_TICKETS:
      return {
        ...state,
        isTabCheapTicketsChecked: true,
        isTabExpensiveTicketsChecked: false,
        isTabOptimalTicketsChecked: false
      };
    case EXPENSIVE_TICKETS: {
      return {
        ...state,
        isTabCheapTicketsChecked: false,
        isTabExpensiveTicketsChecked: true,
        isTabOptimalTicketsChecked: false
      };
    }
    case OPTIMAL_TICKETS: {
      return {
        ...state,
        isTabCheapTicketsChecked: false,
        isTabExpensiveTicketsChecked: false,
        isTabOptimalTicketsChecked: true
      };
    }
    default:
      return state;
  }
};

export const isTabCkeckedCheapTickets = () => ({ type: CHEAP_TICKETS });
export const isTabCheckedExpensiveTickets = () => ({ type: EXPENSIVE_TICKETS });
export const isTabCheckedOptimalTickets = () => ({ type: OPTIMAL_TICKETS });
