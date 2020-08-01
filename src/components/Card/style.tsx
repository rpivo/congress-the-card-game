import styled from 'styled-components';

const Style = styled.div`
  background: #EAEAEA;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  cursor: pointer;
  display: inline-block;
  height: 140px;
  padding: 8px;
  transition: box-shadow 0.2s ease-in-out;
  width: 100px;

  :active {
    background: #9FFFB0
  }

  :hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

export default Style;
