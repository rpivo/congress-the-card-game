import React from 'react';
import Card from '@components/Card';
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

type GetCardsProps = {
  activeCard?: number;
  cardIDs: number[];
  handleMouseDown: (id: number) => void;
  handleXIconClick?: (id: number) => void;
  isHandCard?: boolean;
  mouseCoordinates?: { x: number; y: number; };
};

export const getCards = ({
  activeCard,
  cardIDs,
  handleMouseDown,
  handleXIconClick,
  isHandCard = false,
  mouseCoordinates,
}: Readonly<GetCardsProps>): JSX.Element[] => {
  const cards = [];
  for (const id of cardIDs) {
    const { abilities, group, name } = (cardData as CardType)[`${id}`];
    cards.push(
      <Card
        ability1Title={abilities?.ability1?.title}
        ability1Description={abilities?.ability1?.description}
        active={activeCard === id}
        handleCardMouseDown={handleMouseDown}
        handleXIconClick={handleXIconClick}
        id={id}
        isHandCard={isHandCard}
        key={id}
        mouseCoordinates={mouseCoordinates}
        title={name}
        subtitle={group}
      />
    );
  }
  return cards;
};
