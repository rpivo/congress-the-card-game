import styled from 'styled-components';

const Style = styled.div`
bottom: 25px;
cursor: pointer;
position: fixed;
right: 25px;  

  svg {
    height: 75px;
    width: 75px;

    &:hover .svgCard {
      fill: rgb(255, 255, 255);
      stroke: rgb(112, 112, 112);
    }
  }
`;

export default Style;
