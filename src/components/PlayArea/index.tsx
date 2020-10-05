import React from 'react';
import Deck from '@components/Deck';
import { Context } from '@components/App/store';
import { getCards } from '@components/Card/util';
import { Actions } from '@utilities/types';
import Style from './style';

type PlayAreaProps = {
  activeCard: number;
  handleCardClick: (id: number) => void;
};

const PlayArea = ({ activeCard, handleCardClick }: Readonly<PlayAreaProps>): JSX.Element => {
  const { dispatch, state } = React.useContext(Context);
  const { playAreaCards, shouldShowHand } = state;

  const handleMouseDown = (id: number) => {
    handleCardClick(id);
    if (shouldShowHand) dispatch({ type: Actions.HIDE_HAND });
  };

  return (
    <Style className='playArea'>
      {getCards({ activeCard, cardIDs: playAreaCards, handleMouseDown })}
      <Deck />
    </Style>
  );
};

export default PlayArea;
