import styled from 'styled-components';
import Breakpoints from '@utilities/breakpoints';

const Style = styled.div`
  border: 1px solid blue;
  display: grid;
  grid-row-gap: 8px;
  grid-template-columns: repeat(10, 156px [col-start]);
  margin: 0 auto;
  width: 1560px;

  ${Breakpoints.Medium} {
    grid-template-columns: repeat(8, 156px [col-start]);
    width: 1248px;
  }

  ${Breakpoints.Small} {
    grid-template-columns: repeat(6, 156px [col-start]);
    width: 936px;
  }
`;

export default Style;
