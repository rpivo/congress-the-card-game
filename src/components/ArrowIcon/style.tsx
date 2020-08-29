import styled from 'styled-components';
import Breakpoints from '@utilities/breakpoints';

const Style = styled.div`
  cursor: pointer;

  &.endTurnIcon {
    display: inline-block;
    position: fixed;
    right: 10px;
    top: 10px;
  }

  ${Breakpoints.Medium} {
    &.endTurnIcon {
      right: 22px;
      top: 22px;
    }
  }
`;

export default Style;
