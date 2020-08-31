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

export const getCards = (
  cardIDs: number[],
  handleMouseDown: (id: number) => void,
  activeCard?: number,
): JSX.Element[] => {
  const cards = [];
  for (const id of cardIDs) {
    const { abilities, group, name } = (cardData as CardType)[`${id}`];
    cards.push(
      <Card
        ability1Title={abilities?.ability1?.title}
        ability1Description={abilities?.ability1?.description}
        active={activeCard === id}
        handleCardMouseDown={handleMouseDown}
        id={id}
        key={id}
        title={name}
        subtitle={group}
      />
    );
  }
  return cards;
};
