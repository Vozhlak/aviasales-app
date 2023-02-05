import styles from './Filter.module.scss';

const Filter = () => {
  const filterBtn = [
    {name: 'all-transfers', label: 'Все'},
    {name: 'no-transfers', label: 'Без пересадок'},
    {name: 'one-transfers', label: '1 Пересадка'},
    {name: 'two-transfers', label: '2 Пересадки'},
    {name: 'three-transfers', label: '3 Пересадки'},

  ]
  return (
    <div className={styles['wrap-filter']}>
      <span className={styles['title-filter']}>Количество пересадок</span>
      {
        filterBtn.map(el => 
          <label className={styles['item-filter']} key={el.name}>
            <input className={styles['real-checkbox']} type='checkbox' />
            <span className={styles['custom-checkbox']} />
            {el.label}
          </label>
        )
      }
    </div>
  )
}

export default Filter