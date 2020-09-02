import React from 'react';
import Notification from '@components/Notification';
import { Context } from '@components/App/store';
import Style from './style';

const NotificationQueue = (): JSX.Element => {
  const { state } = React.useContext(Context);
  const didMount = React.useRef(false);
  const [queue, setQueue] = React.useState([] as string[]);
  const { canDrawCard } = state;

  React.useEffect(() => {
    if (canDrawCard && didMount.current) {
      setQueue([...queue, 'New Turn']);
    } else {
      didMount.current = true;
    }
  }, [canDrawCard]);

  return (
    <Style className='notificationQueue'>
      {queue && queue.map((message, id) => <Notification key={id} message={message} />)}
    </Style>
  );
};

export default NotificationQueue;
