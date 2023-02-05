import styles from './App.module.scss';
import logo from '../../assets/Logo.svg';
// eslint-disable-next-line no-unused-vars
import cardImg from '../../assets/card-img.png'
import Filter from '../Filter';
import Tabs from '../Tabs/Tabs';
import CardList from '../CardList';


function App() {
  return (
    <div className={styles.App}>
      <div className={styles['wrap-logo']}>
        <img className={styles['wrap-logo__logo']} src={logo} alt='logo' />
      </div>
      <div className={styles.wrap}>
        <Filter />
        <div className={styles['wrap-list']}>
          <Tabs />
          <CardList />
          <button className={styles['btn-show-tickets']} type='button'>Показать ещё 5 билетов!</button>
        </div>
      </div>
    </div>
  );
}

export default App;
