import React from 'react';
import Style from './style';
import Card from '@components/Card';
import Deck from '@components/Deck';
import cardData from '@utilities/cards.json';

type PlayAreaProps = {
  activeCard: string;
  setActiveCard: React.Dispatch<React.SetStateAction<string>>;
};

const PlayArea = ({ activeCard, setActiveCard }: Readonly<PlayAreaProps>): JSX.Element => {
  const handleCardMouseDown = (id: string) => {
    if (id === activeCard) id = '';
    setActiveCard(id);
  };

  const cards = [];
  for (const [key, value] of Object.entries(cardData)) {
    cards.push(
      <Card
        active={activeCard === key}
        handleCardMouseDown={handleCardMouseDown}
        id={key}
        key={key}
        title={value.name}
        subtitle={value.group}
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
