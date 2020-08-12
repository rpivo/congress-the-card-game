import React, { memo, useContext, useState } from 'react';
import TakeIcon from './TakeIcon';
import { AppContext } from '@components/App';
import Style from '@components/Card/style';

const Deck = (): JSX.Element => {
  const { setShouldDisplayHand } = useContext(AppContext);
  const [canDrawCard, setCanDrawCard] = useState(true);

  const handleClick = () => {
    setCanDrawCard(false);
    setShouldDisplayHand(true);
  };

  return (
    <Style className='deck'>
      <Style
        className={`stackedCard${canDrawCard ? ' canDrawCard' : ''}`}
        onClick={() => canDrawCard && handleClick()}>
        {canDrawCard && <TakeIcon />}
      </Style>
    </Style>
  );
};

export default memo(Deck);
