import styled from 'styled-components';

const Style = styled.div`
  background: rgba(0, 0, 0, 0.8);
  bottom: 0;
  height: 125px;
  left: 0;
  position: fixed;
  right: 0;
  transition: bottom 0.1s ease;

  &.hidden {
    bottom: -125px;
  }
`;

export default Style;
