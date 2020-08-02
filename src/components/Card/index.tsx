import React, { useState } from 'react';
import Style from './style';

const Card = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Style
      className={`card ${isActive ? 'active' : ''}`}
      onClick={(): void => setIsActive(!isActive)}>
      Hello
    </Style>
  );
};

export default Card;
