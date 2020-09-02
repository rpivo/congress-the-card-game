import React from 'react';
import Notification from '@components/Notification';
import { Context } from '@components/App/store';
import Style from './style';

const NotificationQueue = (): JSX.Element => {
  const { state } = React.useContext(Context);
  const didMount = React.useRef(false);
  const { canDrawCard } = state;

  React.useEffect(() => {
    if (canDrawCard && didMount.current) console.log('NotificationQueue / 10 / useEffect');
    else didMount.current = true;
  }, [canDrawCard]);

  return <Style className='notificationQueue'><Notification /></Style>;
};

export default NotificationQueue;
