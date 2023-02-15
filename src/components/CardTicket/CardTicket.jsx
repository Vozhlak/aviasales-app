import React from 'react';
import styles from './CardTicket.module.scss';

const CardTickets = ({ data }) => {
  const { price, carrier, segments } = data;

  const imgAviaSalesBrand = `//pics.avs.io/99/36/${carrier}.png`;

  const [origin, destination] = segments;

  const { stops: stopsOrigin } = origin;
  const { stops: stopsDestination } = destination;

  const getCountTransfer = (count) => {
    switch (count) {
      case 1: {
        return `${count} Пересадка`;
      }
      case 2:
      case 3: {
        return `${count} Пересадки`;
      }
      default: {
        return 'Без пересадок';
      }
    }
  };

  const timeInOut = (date, duration) => {
    const currentDate = new Date(date);
    const outHours = currentDate.getHours().toString().padStart(2, '0');
    const outMinutes = currentDate.getMinutes().toString().padStart(2, '0');
    const inHours = new Date(
      currentDate.setHours(currentDate.getHours() + Math.ceil(duration / 60))
    )
      .getHours()
      .toString()
      .padStart(2, '0');
    const inMinutes = new Date(
      currentDate.setMinutes(currentDate.getMinutes() + duration)
    )
      .getMinutes()
      .toString()
      .padStart(2, '0');
    return `${outHours}:${outMinutes} - ${inHours}:${inMinutes}`;
  };

  const timeTrack = (duration) => {
    const hoursTrack = Math.floor(duration / 60)
      .toString()
      .padStart(2, '0');
    const minutesTrack = Math.floor(duration % 60)
      .toString()
      .padStart(2, '0');
    return `${hoursTrack}ч ${minutesTrack}м`;
  };

  return (
    <div className={styles['wrap-card']}>
      <div className={styles['card-header']}>
        <span className={styles['cost-tickets']}>
          {price.toLocaleString()} ₽
        </span>
        <img
          className={styles['img-tickets']}
          src={imgAviaSalesBrand}
          alt='card-img'
        />
      </div>
      <div className={styles['card-body']}>
        <div>
          <span
            className={
              styles['title-info-tickets']
            }>{`${origin.origin} — ${origin.destination}`}</span>
          <span className={styles['desc-info-tickets']}>
            {timeInOut(origin.date, origin.duration)}
          </span>
        </div>
        <div>
          <span className={styles['title-info-tickets']}>В пути</span>
          <span className={styles['desc-info-tickets']}>
            {timeTrack(origin.duration)}
          </span>
        </div>
        <div>
          <span className={styles['title-info-tickets']}>
            {getCountTransfer(stopsOrigin.length)}
          </span>
          {stopsOrigin.length > 0 ? (
            <span className={styles['desc-info-tickets']}>
              {stopsOrigin.join(', ')}
            </span>
          ) : null}
        </div>
        <div>
          <span
            className={
              styles['title-info-tickets']
            }>{`${destination.origin} — ${destination.destination}`}</span>
          <span className={styles['desc-info-tickets']}>
            {timeInOut(destination.date, destination.duration)}
          </span>
        </div>
        <div>
          <span className={styles['title-info-tickets']}>В пути</span>
          <span className={styles['desc-info-tickets']}>
            {timeTrack(destination.duration)}
          </span>
        </div>
        <div>
          <span className={styles['title-info-tickets']}>
            {getCountTransfer(stopsDestination.length)}
          </span>
          {stopsDestination.length > 0 ? (
            <span className={styles['desc-info-tickets']}>
              {stopsDestination.join(', ')}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CardTickets;
