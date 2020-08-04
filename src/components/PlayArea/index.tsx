import React from 'react';
import Style from './style';
import Card from '@components/Card';
import Deck from '@components/Deck';

type PlayAreaProps = {
  activeCard: number;
  setActiveCard: React.Dispatch<React.SetStateAction<number>>;
};

const PlayArea = ({ activeCard, setActiveCard }: PlayAreaProps): JSX.Element => {
  const handleCardMouseDown = (index: number) => {
    if (index === activeCard) index = -1;
    setActiveCard(index);
  };

  const cards = [];
  for (let index = 0; index < 10; index++) {
    cards.push(
      <Card
        active={activeCard === index}
        index={index}
        key={index}
        handleCardMouseDown={handleCardMouseDown}
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
