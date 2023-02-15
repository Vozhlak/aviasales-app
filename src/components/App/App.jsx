import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';
import styles from './App.module.scss';
import logo from '../../assets/Logo.svg';
import Filter from '../Filter';
import Tabs from '../Tabs/Tabs';
import CardList from '../CardList';
import fetchData from '../../actions/ticketsAction';
import addUniqID from '../../helpers/addUniqID';

const App = () => {
  const dispath = useDispatch();

  const { tickets } = useSelector((state) => state.tickets);
  const { filters } = useSelector((state) => state);
  const { tabIsChecked } = useSelector((state) => state);
  const {
    isTabCheapTicketsChecked,
    isTabExpensiveTicketsChecked,
    isTabOptimalTicketsChecked
  } = tabIsChecked;
  const { isStop } = useSelector((state) => state.reducerApp);

  const [countShowTickets, setCountShowTickets] = useState(5);

  const sortDataFn = useCallback(
    (dataTickets) => {
      const copyTickets = [...dataTickets];
      if (isTabCheapTicketsChecked) {
        const newData = copyTickets.sort((a, b) => a.price - b.price);
        return newData;
      }
      if (isTabExpensiveTicketsChecked) {
        const newData = copyTickets.sort(
          (a, b) =>
            a.segments[0].duration +
            a.segments[1].duration -
            (b.segments[0].duration + b.segments[1].duration)
        );
        return newData;
      }
      if (isTabOptimalTicketsChecked) {
        const newData = copyTickets.sort(
          (a, b) =>
            a.segments[0].duration +
            a.segments[1].duration +
            a.price -
            (b.segments[0].duration + b.segments[1].duration + b.price)
        );
        return newData;
      }
      return copyTickets;
    },
    [tabIsChecked]
  );

  const filteringTickets = useCallback(
    (arrData, countStops) => {
      const newData = arrData.filter((ticket) => {
        if (countStops.isAllTransfersChecked) {
          return true;
        }
        if (
          countStops.isNoTransfersChecked &&
          (ticket.segments[0].stops.length === 0 ||
            ticket.segments[1].stops.length === 0)
        )
          return true;
        if (
          countStops.isOneTransfersChecked &&
          (ticket.segments[0].stops.length === 1 ||
            ticket.segments[1].stops.length === 1)
        )
          return true;
        if (
          countStops.isTwoTransfersChecked &&
          (ticket.segments[0].stops.length === 2 ||
            ticket.segments[1].stops.length === 2)
        )
          return true;
        if (
          countStops.isThreeTransfersChecked &&
          (ticket.segments[0].stops.length === 3 ||
            ticket.segments[1].stops.length === 3)
        )
          return true;
        return false;
      });
      return newData;
    },
    [filters]
  );

  useEffect(() => {
    setCountShowTickets(5);
  }, [filters, tabIsChecked]);

  useEffect(() => {
    dispath(fetchData());
  }, []);

  const filteredTickets = addUniqID(
    sortDataFn(filteringTickets(tickets, filters)).slice(0, countShowTickets)
  );

  const msgNoTickets =
    !filters.isAllTransfersChecked && !filteredTickets.length ? (
      <div className={styles['msg-no-tickets']}>
        Рейсов, подходящих под заданные фильтры, не найдено
      </div>
    ) : null;

  const cardList =
    filteredTickets.length > 0 ? <CardList tickets={filteredTickets} /> : null;

  const noTickets =
    filteredTickets.length > 0 ? (
      <div
        className={styles['btn-show-tickets']}
        style={{ textAlign: 'center' }}>
        Билеты пока закончилсь
      </div>
    ) : null;

  const btnShowTickets =
    filteredTickets.length && filteredTickets.length > 0 ? (
      <button
        className={styles['btn-show-tickets']}
        type='button'
        onClick={() => setCountShowTickets((prevCount) => prevCount + 5)}>
        Показать ещё 5 билетов!
      </button>
    ) : (
      noTickets
    );

  const spinner = !tickets.length ? (
    <svg
      className={styles.spinner}
      viewBox='0 0 50 50'>
      <circle
        className={styles.path}
        cx='25'
        cy='25'
        r='20'
        fill='none'
        strokeWidth='5'
      />
    </svg>
  ) : null;

  const progress = tickets.length / 100;

  return (
    <div className={styles.App}>
      <div className={styles['wrap-logo']}>
        <img
          className={styles['wrap-logo__logo']}
          src={logo}
          alt='logo'
        />
      </div>
      <div className={styles.wrap}>
        <Filter />
        <div className={styles['wrap-list']}>
          <Tabs />
          {!isStop ? (
            <LoadingBar
              progress={progress}
              shadow={false}
              height={5}
              color='#2196f3'
              containerStyle={{ position: 'relative' }}
              className={styles.loader}
            />
          ) : null}
          {msgNoTickets}
          {cardList}
          {spinner}
          {btnShowTickets}
        </div>
      </div>
    </div>
  );
};

export default App;
