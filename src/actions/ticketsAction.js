import axios from 'axios';
import { setTickets } from '../redux/ticketsReducer';
import { isStopFetch } from '../redux/appReducer';

const fetchData = () => (dispatch) => {
  const fetchTickets = (idSearch) => {
    axios
      .get(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${idSearch}`
      )
      .then((res) => res.data)
      .then((data) => {
        if (!data.stop) {
          dispatch(setTickets(data.tickets));
          fetchTickets(idSearch);
        } else {
          dispatch(isStopFetch());
        }
        return null;
      })
      .catch((error) => {
        // console.log(error);
        if (error.response.status === 500) {
          return fetchTickets(idSearch);
        }
        return null;
      });
  };

  const getIdSearch = () => {
    axios
      .get('https://aviasales-test-api.kata.academy/search')
      .then(({ data }) => fetchTickets(data.searchId));
    // .catch(error => console.log(error));
  };
  getIdSearch();
};

export default fetchData;
