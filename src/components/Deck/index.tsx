import React, { memo, useState } from 'react';
import Style from '@components/Card/style';

const Deck = (): JSX.Element => {
  const [canDrawCard, setCanDrawCard] = useState(true);
  return (
    <Style className='deck'>
      <Style className='stackedCard' onClick={() => setCanDrawCard(false)}>
        {canDrawCard && <p className='deckParagraph'>Draw a card.</p>}
      </Style>
    </Style>
  );
};

export default memo(Deck);
