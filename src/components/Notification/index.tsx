import React from 'react';

type NotificationProps = {
  message: string;
}

const Notification = ({ message }: Readonly<NotificationProps>): JSX.Element => <p>{message}</p>;

export default Notification;
