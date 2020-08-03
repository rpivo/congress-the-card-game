import React, { useState } from 'react';
import Style from './style';
import Card from '@components/Card';
import Deck from '@components/Deck';

const PlayArea = (): JSX.Element => {
  const [active, setActive] = useState(-1);

  const handleCardClick = (index: number) => {
    if (index === active) index = -1;
    setActive(index);
  };

  const cards = [];
  for (let index = 0; index < 10; index++) {
    cards.push(
      <Card
        active={active === index}
        index={index}
        key={index}
        handleCardClick={handleCardClick}
      />
    );
  }
  return (
    <Style className='playArea'>
      {cards}
      <Deck />
    </Style>
  );
};

export default PlayArea;
