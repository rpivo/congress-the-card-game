import styled from 'styled-components';
import { Breakpoints } from '@utilities/types';

const Style = styled.div`
bottom: 16px;
cursor: pointer;
position: fixed;
right: 16px;  

  svg {
    height: 75px;
    width: 75px;

    &:hover .svgCard {
      fill: rgb(255, 255, 255);
      stroke: rgb(112, 112, 112);
    }
  }

  ${Breakpoints.MEDIUM} {
    bottom: 25px;
    right: 25px;  
  }
`;

export default Style;
