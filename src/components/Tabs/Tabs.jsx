import { useDispatch, useSelector } from 'react-redux';
import styles from './Tabs.module.scss';
import {
  isTabCkeckedCheapTickets,
  isTabCheckedExpensiveTickets,
  isTabCheckedOptimalTickets
} from '../../redux/tabsReducer';

const Tabs = () => {
  const {
    isTabCheapTicketsChecked,
    isTabExpensiveTicketsChecked,
    isTabOptimalTicketsChecked
  } = useSelector((state) => state.tabIsChecked);
  const dispatch = useDispatch();

  const tabs = [
    {
      id: 1,
      name: 'tab',
      label: 'Самый дешевый',
      check: isTabCheapTicketsChecked
    },
    {
      id: 2,
      name: 'tab',
      label: 'Самый быстрый',
      check: isTabExpensiveTicketsChecked
    },
    {
      id: 3,
      name: 'tab',
      label: 'Оптимальный',
      check: isTabOptimalTicketsChecked
    }
  ];

  const onChangeTab = (id) => {
    switch (id) {
      case 1:
        dispatch(isTabCkeckedCheapTickets());
        break;
      case 2:
        dispatch(isTabCheckedExpensiveTickets());
        break;
      case 3:
        dispatch(isTabCheckedOptimalTickets());
        break;
      default:
        // eslint-disable-next-line no-console
        console.log('Увы, пошло что-то не так :(');
        break;
    }
  };
  return (
    <div className={styles['wrap-tabs']}>
      {tabs.map((item) => (
        <div
          className={styles.tab}
          key={item.id}>
          <input
            className={styles.tab__input}
            name={item.name}
            type='radio'
            id={item.id}
            checked={item.check}
            onChange={() => onChangeTab(item.id)}
          />
          <label
            className={styles.tab__label}
            htmlFor={item.id}>
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
};
export default Tabs;
