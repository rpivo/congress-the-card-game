import React, { memo, useState } from 'react';
import Style from '@components/Card/style';

const Deck = (): JSX.Element => {
  const [canDrawCard, setCanDrawCard] = useState(true);
  return (
    <Style className='deck' onClick={() => setCanDrawCard(false)}>
      {canDrawCard && <p className='deck-paragraph'>Draw a card.</p>}
    </Style>
  );
};

export default memo(Deck);
