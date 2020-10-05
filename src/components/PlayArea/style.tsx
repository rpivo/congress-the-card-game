import styled from 'styled-components';
import { Breakpoints } from '@utilities/types';

const Style = styled.div`
  display: grid;
  grid-row-gap: 8px;
  grid-template-columns: repeat(10, 175px [col-start]);
  margin: 0 auto;
  width: 1750px;

  ${Breakpoints.MEDIUM} {
    grid-template-columns: repeat(8, 175px [col-start]);
    width: 1400px;
  }

  ${Breakpoints.SMALL} {
    grid-template-columns: repeat(6, 175px [col-start]);
    width: 1050px;
  }
`;

export default Style;
