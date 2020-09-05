import styled from 'styled-components';

type HandStyle = {
  cardCount: number;
};

const Style = styled.div<HandStyle>`
  background: rgba(0, 0, 0, 0.8);
  bottom: 0;
  display: grid;
  grid-row-gap: 8px;
  grid-template-columns: ${props => `repeat(${props.cardCount}, 175px [col-start]);`}
  justify-content: center;
  left: 0;
  min-height: 226px;
  padding: 15px;
  position: fixed;
  right: 0;
  transition: bottom 0.1s ease;

  &.hidden {
    bottom: -260px;
  }
`;

export default Style;
