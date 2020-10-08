import styled from 'styled-components';

const Style = styled.div`
  background: #EAEAEA;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  height: 210px;
  padding: 8px;
  place-self: center;
  position: relative;
  transition: box-shadow 0.2s ease-in-out;
  width: 150px;

  &.active {
    background: #9FFFB0;
  }

  &.card {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  
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

      .drawCardIcon circle {
        fill: #353;
      }

      .drawCardIcon p {
        margin-top: 7px;
      }

      .drawCardIcon path, .drawCardIcon line {
        stroke: #9FFFB0;
      }

      .drawCardIcon svg {
        width: 56;
        height: 56;
        margin-top: -3px;
      }
    }

    .drawCardIcon {
      margin-top: 60px;
      text-align: center;
  
      p {
        margin-top: 10px;
      }
    }
  }

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

  .xIcon {
    align-itmes: center;
    background: #FF0000;
    border-radius: 100%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    color: white;
    display: flex;
    font-size: 18px;
    height: 20px;
    width: 20px;
    justify-content: center;
    line-height: 18px;
    padding: 2px;
    position: absolute;
    text-align: center;
    top: -6px;
    right: -6px;
  }
`;

export default Style;
