import styled from 'styled-components';

const Style = styled.div`
  background: rgba(0, 0, 0, 0.8);
  bottom: 0;
  left: 0;
  padding: 15px;
  position: fixed;
  right: 0;
  transition: bottom 0.1s ease;

  &.hidden {
    bottom: -260px;
  }
`;

export default Style;
