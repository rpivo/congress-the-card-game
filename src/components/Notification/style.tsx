import styled from 'styled-components';
import { Notifications } from '@utilities/enums';

type NotificationStyle = {
  type: string;
};

const Style = styled.span<NotificationStyle>`
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fade 0.25s 1;
  background: ${props => props.type === Notifications.RED ? '#DD2222' : '#2FAB40'};
  border-radius: 28px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  color: white;
  display: block;
  font-size: 16px;
  margin-top: 10px;
  padding: 10px 15px 10px 15px;
  transition: all 0.2s ease;
`;

export default Style;
