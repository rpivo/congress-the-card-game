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

  const handleMouseDown = (id: number) => {
    if (id === activeCard) id = -1;
    setActiveCard(id);
    if (shouldShowHand) dispatch('HIDE_HAND');
  };

  return (
    <Style className='playArea'>
      {getCards({ activeCard, cardIDs: playAreaCards, handleMouseDown })}
      <Deck />
    </Style>
  );
};

export default PlayArea;
