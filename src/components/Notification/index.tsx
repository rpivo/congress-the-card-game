import React from 'react';
import Style from './style';

const Notification = ({ message, type }: Readonly<NotificationType>): JSX.Element =>
  <Style type={type}>{message}</Style>;

export default Notification;
