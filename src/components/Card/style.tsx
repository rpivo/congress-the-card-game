import styled from 'styled-components';

const Style = styled.div`
  background: #EAEAEA;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  height: 182px;
  padding: 8px;
  place-self: center;
  transition: box-shadow 0.2s ease-in-out;
  width: 130px;

  &.active {
    background: #9FFFB0;
  }

  &.card {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    :active {
      background: #9FFFB0;
    }
  
    :hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
  }

  &.deck {
    box-shadow: 0 1px 3px rgba(0,0,0,0.72), 0 1px 2px rgba(0,0,0,0.84);
    grid-row: 3; 
    grid-column: 1;
  }
`;

export default Style;
