import React from 'react';
import { Context } from '@components/App/store';
import Card from '@components/Card';
import Style from './style';

const Hand = (): JSX.Element => {
  const { state } = React.useContext(Context);
  const { cardOrder, handCards, shouldShowHand } = state;
  console.log('Hand / 9 / cardOrder', { cardOrder, handCards });
  const handleMouseDown = () => null;
  return (
    <Style
      className={`hand${shouldShowHand ? '' : ' hidden'}`}
      onClick={(event: React.MouseEvent<HTMLInputElement>): void => event.stopPropagation()}>
      {handCards.map(cardID =>
        <Card id={`${cardID}`} key={cardID} handleCardMouseDown={handleMouseDown} />
      )}
    </Style>
  );
};

export default Hand;
