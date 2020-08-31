import React from 'react';
import Deck from '@components/Deck';
import { Context } from '@components/App/store';
import { getCards } from '@components/Card/util';
import Style from './style';

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

  return (
    <Style className='playArea'>
      {getCards(playAreaCards, handleCardMouseDown, activeCard)}
      <Deck />
    </Style>
  );
};

export default PlayArea;
