import styled from 'styled-components';
import Breakpoints from '@utilities/breakpoints';

const Style = styled.div`
  border: 1px solid blue;
  display: grid;
  grid-row-gap: 8px;
  grid-template-columns: repeat(10, 175px [col-start]);
  margin: 0 auto;
  width: 1750px;

  ${Breakpoints.Medium} {
    grid-template-columns: repeat(8, 175px [col-start]);
    width: 1400px;
  }

  ${Breakpoints.Small} {
    grid-template-columns: repeat(6, 175px [col-start]);
    width: 1050px;
  }
`;

export default Style;
