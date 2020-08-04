import React, { memo } from 'react';
import Style from '@components/Card/style';

const Deck = (): JSX.Element => <Style className='deck'><div>Deck</div></Style>;

export default memo(Deck);
