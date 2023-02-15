import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.scss';
import {
  isAllStopsChecked,
  isNoStopsChecked,
  isOneStopsChecked,
  isTwoStopsChecked,
  isThreeStopsChecked
} from '../../redux/filtersReducer';

const Filter = () => {
  const { filters } = useSelector((state) => state);
  const {
    isAllTransfersChecked,
    isNoTransfersChecked,
    isOneTransfersChecked,
    isTwoTransfersChecked,
    isThreeTransfersChecked
  } = filters;
  const dispatch = useDispatch();

  const filterBtn = [
    { name: 'all-transfers', label: 'Все', isChecked: isAllTransfersChecked },
    {
      name: 'no-transfers',
      label: 'Без пересадок',
      isChecked: isNoTransfersChecked
    },
    {
      name: 'one-transfers',
      label: '1 Пересадка',
      isChecked: isOneTransfersChecked
    },
    {
      name: 'two-transfers',
      label: '2 Пересадки',
      isChecked: isTwoTransfersChecked
    },
    {
      name: 'three-transfers',
      label: '3 Пересадки',
      isChecked: isThreeTransfersChecked
    }
  ];

  const onChange = (nameFilter) => {
    switch (nameFilter) {
      case 'all-transfers':
        dispatch(isAllStopsChecked(filters.isAllTransfersChecked));
        break;
      case 'no-transfers':
        dispatch(isNoStopsChecked());
        break;
      case 'one-transfers':
        dispatch(isOneStopsChecked());
        break;
      case 'two-transfers':
        dispatch(isTwoStopsChecked());
        break;
      case 'three-transfers':
        dispatch(isThreeStopsChecked());
        break;
      default:
        // eslint-disable-next-line no-console
        console.log('Что-то пошло не так :(');
        break;
    }
  };

  useEffect(() => {
    if (
      !filters.isAllTransfersChecked &&
      filters.isNoTransfersChecked &&
      filters.isOneTransfersChecked &&
      filters.isTwoTransfersChecked &&
      filters.isThreeTransfersChecked
    ) {
      dispatch(isAllStopsChecked(filters.isAllTransfersChecked));
    }
  }, [filters]);

  return (
    <div className={styles['wrap-filter']}>
      <span className={styles['title-filter']}>Количество пересадок</span>
      {filterBtn.map((el) => (
        <label
          className={styles['item-filter']}
          key={el.name}>
          <input
            className={styles['real-checkbox']}
            type='checkbox'
            checked={el.isChecked}
            onChange={() => onChange(el.name)}
          />
          <span className={styles['custom-checkbox']} />
          {el.label}
        </label>
      ))}
    </div>
  );
};

export default Filter;
