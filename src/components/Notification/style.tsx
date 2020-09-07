import styled from 'styled-components';

const Style = styled.span`
  @keyframes fade {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  animation: fade 1.25s 1;
  background: #2FAB40;
  border-radius: 28px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  color: white;
  display: block;
  font-size: 14px;
  margin-top: 10px;
  padding: 10px 15px 10px 15px;
  transition: all 0.2s ease;
`;

export default Style;
