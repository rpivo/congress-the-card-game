import React from 'react';
import ArrowIcon from '@components/ArrowIcon';
import { Context } from '@components/App/store';
import Style from '@components/Card/style';

const Deck = (): JSX.Element => {
  const { dispatch, state } = React.useContext(Context);
  const { canDrawCard } = state;

  return (
    <Style className='deck'>
      <Style
        className={`stackedCard${canDrawCard ? ' canDrawCard' : ''}`}
        onClick={() => canDrawCard && dispatch('DRAW_CARD')}>
        {canDrawCard && <ArrowIcon iconType='DRAW_CARD' />}
      </Style>
    </Style>
  );
};

export default React.memo(Deck);
