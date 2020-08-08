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

  p {
    margin-bottom: 0;
    margin-top: 0;

    &.subtext {
      font-size: 11px;
      margin-top: 3px;
    }

    &.ability1Title {
      margin-top: 15px;
    }
  }

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
    background: #C6C6C6;
    grid-row: 3; 
    grid-column: 1;
    box-shadow: 0 1px 3px rgba(0,0,0,0.52), 0 1px 2px rgba(0,0,0,0.64);
  }

  &.stackedCard {
    margin-left: -11px;
    margin-top: -11px;

    &.canDrawCard:hover {
      background: #9FFFB0;
    }

    .takeIcon {
      margin-top: 60px;
      text-align: center;
  
      p {
        margin-top: 10px;
      }
    }
  }
`;

export default Style;
