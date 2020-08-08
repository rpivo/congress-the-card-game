import React, { memo, useState } from 'react';
import TakeIcon from './TakeIcon';
import Style from '@components/Card/style';

const Deck = (): JSX.Element => {
  const [canDrawCard, setCanDrawCard] = useState(true);
  return (
    <Style className='deck'>
      <Style
        className={`stackedCard${canDrawCard ? ' canDrawCard' : ''}`}
        onClick={() => setCanDrawCard(false)}>
        {canDrawCard && <TakeIcon />}
      </Style>
    </Style>
  );
};

export default memo(Deck);
