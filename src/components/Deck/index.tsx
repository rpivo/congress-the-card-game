import React from 'react';
import ArrowIcon from '@components/ArrowIcon';
import { Context } from '@components/App/store';
import Style from '@components/Card/style';
import { Actions, Icons } from '@utilities/enums';

const Deck = (): JSX.Element => {
  const { dispatch, state } = React.useContext(Context);
  const { canDrawCard, cardOrder, handCards } = state;

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
    if (canDrawCard) {
      if (handCards.length > 4) dispatch({ type: Actions.NOTIFY_HAND_FULL });
      else if (cardOrder.length) dispatch({ type: Actions.DRAW_CARD });
    }
  };

  return (
    <Style className='deck'>
      <Style
        className={`stackedCard${canDrawCard ? ' canDrawCard' : ''}`}
        onClick={(event: React.MouseEvent<HTMLInputElement>) => handleClick(event)}>
        {canDrawCard && <ArrowIcon iconType={Icons.DRAW_CARD} />}
      </Style>
    </Style>
  );
};

export default React.memo(Deck);
