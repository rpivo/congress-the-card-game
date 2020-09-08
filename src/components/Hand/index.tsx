import React from 'react';
import { Context } from '@components/App/store';
import { getCards } from '@components/Card/util.tsx';
import Style from './style';

const Hand = (): JSX.Element => {
  const { state } = React.useContext(Context);
  const { handCards, shouldShowHand } = state;
  const handleMouseDown = () => null;
  const cards = getCards({ cardIDs: handCards, handleMouseDown, isHandCard: true });
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
