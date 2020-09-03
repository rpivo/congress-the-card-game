import React from 'react';
import Notification from '@components/Notification';
import { Context } from '@components/App/store';
import Style from './style';

const NotificationQueue = (): JSX.Element => {
  const { state } = React.useContext(Context);
  const { canDrawCard } = state;

  const didMount = React.useRef(false);
  const timerRef = React.useRef(0);

  const [queue, setQueue] = React.useState([] as string[]);
  const [timer, setTimer] = React.useState(Date.now);

  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      setTimer(Date.now);
    }, 1500);
  };

  React.useEffect(() => {
    if (canDrawCard && didMount.current) {
      setQueue([...queue, 'New Turn']);
    } else {
      didMount.current = true;
    }
  }, [canDrawCard]);

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
