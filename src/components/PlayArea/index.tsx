import React from 'react';
import Style from './style';
import Card from '@components/Card';
import Deck from '@components/Deck';
import * as cardData from '@utilities/cards.json';

type PlayAreaProps = {
  activeCard: number;
  setActiveCard: React.Dispatch<React.SetStateAction<number>>;
};

const PlayArea = ({ activeCard, setActiveCard }: Readonly<PlayAreaProps>): JSX.Element => {
  const handleCardMouseDown = (index: number) => {
    if (index === activeCard) index = -1;
    setActiveCard(index);
  };

  const cards = [];
  for (let index = 0; index < cardData.states.length; index++) {
    cards.push(
      <Card
        active={activeCard === index}
        handleCardMouseDown={handleCardMouseDown}
        index={index}
        key={index}
        title={cardData.states[index]}
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
