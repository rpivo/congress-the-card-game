import React from 'react';
import Notification from '@components/Notification';
import { Context } from '@components/App/store';
import { Notifications } from '@utilities/types';
import Style from './style';

const NotificationQueue = (): JSX.Element => {
  const { state } = React.useContext(Context);
  const { canDrawCard, notifyHandIsFull } = state;

  const didMount = React.useRef(false);
  const previousNotifyHandIsFull = React.useRef(false);
  const timerRef = React.useRef(0);

  const [queue, setQueue] = React.useState([] as NotificationType[]);
  const [timer, setTimer] = React.useState(Date.now);

  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      setTimer(Date.now);
    }, 1250);
  };

  React.useEffect(() => {
    if (didMount.current) {
      const notification: NotificationType = { message: '', type: '' };

      if (notifyHandIsFull !== previousNotifyHandIsFull.current) {
        notification.message = 'Your hand is full! Discard a card.';
        notification.type = Notifications.RED;
        previousNotifyHandIsFull.current = notifyHandIsFull;
      } else if (canDrawCard) {
        notification.message = 'New Turn';
        notification.type = Notifications.GREEN;
      }

      if (notification.message) setQueue([...queue, notification]);

    } else {
      didMount.current = true;
    }
  }, [canDrawCard, notifyHandIsFull]);

  React.useEffect(() => {
    if (timerRef.current === 0 && queue.length !== 0) startTimer();
  }, [queue]);

  React.useEffect(() => {
    timerRef.current = 0;
    setQueue(queue.slice(1));
  }, [timer]);

  return (
    <Style className='notificationQueue'>
      {queue && queue.map(({ message, type }, id) =>
        <Notification key={id} message={message} type={type} />)
      }
    </Style>
  );
};

export default NotificationQueue;
