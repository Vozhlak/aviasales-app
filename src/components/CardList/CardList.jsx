import styles from './CardList.module.scss';
import cardImg from '../../assets/card-img.png'

const CardList = () => {
  const cards = [
    {
      id: 1,
      price: 13400
    },
    {
      id: 2,
      price: 14500
    },
    {
      id: 3,
      price: 10200
    },
    {
      id: 4,
      price: 11600
    },
    {
      id: 5,
      price: 9400
    },
  ];

  // eslint-disable-next-line no-unused-vars
  const cardsView = () => (
    cards.map(item => (
      <div className={styles['wrap-card']} key={item.id}>
        <div className={styles['card-header']}>
          <span className={styles['cost-tickets']}>{item.price} ₽</span>
          <img className={styles['img-tickets']} src={cardImg} alt='card-img' />
        </div>
        <div className={styles['card-body']}>
          <div>
            <span className={styles['title-info-tickets']}>MOW – HKT</span>
            <span className={styles['desc-info-tickets']}>10:45 – 08:00</span>
          </div>
          <div>
            <span className={styles['title-info-tickets']}>В пути</span>
            <span className={styles['desc-info-tickets']}>21ч 15м</span>
          </div>
          <div>
            <span className={styles['title-info-tickets']}>2 пересадки</span>
            <span className={styles['desc-info-tickets']}>HKG, JNB, HKG</span>
          </div>
          <div>
            <span className={styles['title-info-tickets']}>MOW – HKT</span>
            <span className={styles['desc-info-tickets']}>11:20 – 00:50</span>
          </div>
          <div>
            <span className={styles['title-info-tickets']}>В пути</span>
            <span className={styles['desc-info-tickets']}>13ч 30м</span>
          </div>
          <div>
            <span className={styles['title-info-tickets']}>2 пересадки</span>
            <span className={styles['desc-info-tickets']}>HKG</span>
          </div>
        </div>
      </div>)
    )
  )

  return (
    <div className={styles['wrap-list']}>
      {
        cardsView()
      }
    </div>
  )
}
export default CardList