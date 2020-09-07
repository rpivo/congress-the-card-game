import React from 'react';
import Style from './style';

type NotificationProps = {
  message: string;
}

const Notification = ({ message }: Readonly<NotificationProps>): JSX.Element =>
  <Style>{message}</Style>;

export default Notification;
