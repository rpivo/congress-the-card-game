import React from 'react';
import Style from './style';
import Card from '@components/Card';
import Deck from '@components/Deck';
import cardData from '@utilities/cards.json';

type CardType = {
  abilities?: {
    ability1?: {
      title: string;
      description: string;
    }
  };
  name: string;
  group: string;
  type: string;
};

type PlayAreaProps = {
  activeCard: string;
  setActiveCard: React.Dispatch<React.SetStateAction<string>>;
  setShouldDisplayHand: React.Dispatch<React.SetStateAction<boolean>>;
  shouldDisplayHand: boolean;
};

const PlayArea = ({
  activeCard,
  setActiveCard,
  setShouldDisplayHand,
  shouldDisplayHand,
}: Readonly<PlayAreaProps>): JSX.Element => {
  const handleCardMouseDown = (id: string) => {
    if (id === activeCard) id = '';
    setActiveCard(id);
    if (shouldDisplayHand) setShouldDisplayHand(false);
  };

  const getCards = () => {
    const cards = [];
    for (const [id, card] of Object.entries(cardData)) {
      cards.push(
        <Card
          ability1Title={(card as CardType).abilities?.ability1?.title}
          ability1Description={(card as CardType).abilities?.ability1?.description}
          active={activeCard === id}
          handleCardMouseDown={handleCardMouseDown}
          id={id}
          key={id}
          title={card.name}
          subtitle={card.group}
        />
      );
    }
    return cards;
  };

  return (
    <Style className='playArea'>
      {getCards()}
      <Deck />
    </Style>
  );
};

export default PlayArea;
