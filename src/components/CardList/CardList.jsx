import styles from './CardList.module.scss';
import CardTicket from '../CardTicket/CardTicket';

const CardList = ({ tickets }) => {
  const cardTickets = tickets.map((item) => (
    <li key={item.id}>
      <CardTicket data={item} />
    </li>
  ));

  return <ul className={styles['wrap-list']}>{cardTickets}</ul>;
};
export default CardList;
