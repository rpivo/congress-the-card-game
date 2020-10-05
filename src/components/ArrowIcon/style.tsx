import styled from 'styled-components';
import { Breakpoints } from '@utilities/types';

const Style = styled.div`
  cursor: pointer;

  &.endTurnIcon {
    display: inline-block;
    position: fixed;
    right: 10px;
    text-align: center;
    top: 10px;

    p {
      margin-top: -10px;
    }

    &.endable line, &.endable path {
      @keyframes pulse {
        0% {
          stroke: #D0D0D0;
        }
        50% {
          stroke: #9FFFB0;
        }
        100% {
          stroke: #D0D0D0;
        }
      }
      animation: pulse 3s infinite;
    }
  }

  ${Breakpoints.MEDIUM} {
    &.endTurnIcon {
      right: 22px;
      top: 22px;
    }
  }
`;

export default Style;
