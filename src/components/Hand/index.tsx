import React from 'react';
import { Context } from '@components/App/store';
import { getCards } from '@components/Card/util.tsx';
import { Actions } from '@utilities/types';
import Style from './style';

const Hand = (): JSX.Element => {
  const { dispatch, state } = React.useContext(Context);
  const { handCards, shouldShowHand } = state;

  const handleMouseDown = () => null;
  const handleXIconClick = (id: number) =>
    dispatch({
      data: { id },
      type: Actions.DISCARD_CARD,
    });

  const cards = getCards({
    cardIDs: handCards,
    handleMouseDown,
    handleXIconClick,
    isHandCard: true,
  });

  return (
    <Style
      cardCount={handCards.length}
      className={`hand${shouldShowHand ? '' : ' hidden'}`}
      onClick={(event: React.MouseEvent<HTMLInputElement>): void => event.stopPropagation()}>
      {cards.length ? cards : <p className='empty'>Your hand is empty.</p>}
    </Style>
  );
};

export default Hand;
