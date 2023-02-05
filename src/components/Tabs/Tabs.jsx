import styles from './Tabs.module.scss';

const Tabs = () => {
  const tabs = [
    {id: 'tab1', name: 'tab', label: 'Самый дешевый', check: true},
    {id: 'tab2', name: 'tab', label: 'Самый быстрый', check: false},
    {id: 'tab3', name: 'tab', label: 'Оптимальный', check: false},
  ]
  return (
    <div className={styles['wrap-tabs']}>
      {
        tabs.map((item) => (
          <div className={styles.tab} key={item.id}>
            <input className={styles.tab__input} name={item.name} type='radio' id={item.id} defaultChecked={item.check} />
            <label className={styles.tab__label} htmlFor={item.id}>{item.label}</label>
          </div>)
        )
      }
    </div>
  )
}
export default Tabs;