import styled from 'styled-components';

const Style = styled.div`
  border: 1px solid blue;
  display: grid;
  grid-row-gap: 8px;
  grid-template-columns: repeat(10, 128px [col-start]);
`;

export default Style;
