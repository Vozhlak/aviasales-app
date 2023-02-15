const ALL_TICKETS = 'ALL_TICKETS';

const initialState = {
  tickets: []
};

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_TICKETS: {
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload]
      };
    }
    default:
      return state;
  }
};

export const setTickets = (payload) => ({ type: ALL_TICKETS, payload });
