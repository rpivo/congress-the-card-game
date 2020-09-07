import React from 'react';
import Notification from '@components/Notification';
import { Context } from '@components/App/store';
import Style from './style';

const NotificationQueue = (): JSX.Element => {
  const { state } = React.useContext(Context);
  const { canDrawCard, notifyHandIsFull } = state;

  const didMount = React.useRef(false);
  const previousNotifyHandIsFull = React.useRef(false);
  const timerRef = React.useRef(0);

  const [queue, setQueue] = React.useState([] as string[]);
  const [timer, setTimer] = React.useState(Date.now);

  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      setTimer(Date.now);
    }, 1250);
  };

  React.useEffect(() => {
    if (didMount.current) {

      let notification = '';

      if (notifyHandIsFull !== previousNotifyHandIsFull.current) {
        notification = 'Your hand is full! Discard a card.';
        previousNotifyHandIsFull.current = notifyHandIsFull;
      } else if (canDrawCard) {
        notification = 'New Turn';
      }

      if (notification) setQueue([...queue, notification]);

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
      {queue && queue.map((message, id) => <Notification key={id} message={message} />)}
    </Style>
  );
};

export default NotificationQueue;
