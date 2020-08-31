import React from 'react';
import Style from './style';
import Card from '@components/Card';
import Deck from '@components/Deck';
import { Context } from '@components/App/store';
import cardData from '@utilities/cards.json';

type CardType = {
  [id: string]: {
    abilities?: {
      ability1?: {
        title: string;
        description: string;
      }
    };
    name: string;
    group: string;
    type: string;
  }
};

type PlayAreaProps = {
  activeCard: number;
  setActiveCard: React.Dispatch<React.SetStateAction<number>>;
};

const PlayArea = ({ activeCard, setActiveCard }: Readonly<PlayAreaProps>): JSX.Element => {
  const { dispatch, state } = React.useContext(Context);
  const { playAreaCards, shouldShowHand } = state;

  const handleCardMouseDown = (id: number) => {
    if (id === activeCard) id = -1;
    setActiveCard(id);
    if (shouldShowHand) dispatch('HIDE_HAND');
  };

  const getCards = () => {
    const cards = [];
    for (const id of playAreaCards) {
      const { abilities, group, name } = (cardData as CardType)[`${id}`];
      cards.push(
        <Card
          ability1Title={abilities?.ability1?.title}
          ability1Description={abilities?.ability1?.description}
          active={activeCard === id}
          handleCardMouseDown={handleCardMouseDown}
          id={id}
          key={id}
          title={name}
          subtitle={group}
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
