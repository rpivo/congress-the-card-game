import React from 'react';
import { Context } from '@components/App/store';
import { getCards } from '@components/Card/util.tsx';
import { Actions } from '@utilities/types';
import Style from './style';

type HandProps = {
  activeCard: number;
  handleCardClick: (id: number, isHandCard?: boolean) => void;
}

const Hand = ({ activeCard, handleCardClick }: Readonly<HandProps>): JSX.Element => {
  const { dispatch, state } = React.useContext(Context);
  const { handCards, shouldShowHand } = state;

  const handleXIconClick = (id: number) =>
    dispatch({
      data: { id },
      type: Actions.DISCARD_CARD,
    });

  const cards = getCards({
    activeCard,
    cardIDs: handCards,
    handleMouseDown: handleCardClick,
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
