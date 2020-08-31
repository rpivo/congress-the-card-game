import React from 'react';
import { Context } from '@components/App/store';
import { getCards } from '@components/Card/util.tsx';
import Style from './style';

const Hand = (): JSX.Element => {
  const { state } = React.useContext(Context);
  const { handCards, shouldShowHand } = state;
  const handleMouseDown = () => null;
  return (
    <Style
      className={`hand${shouldShowHand ? '' : ' hidden'}`}
      onClick={(event: React.MouseEvent<HTMLInputElement>): void => event.stopPropagation()}>
      {getCards(handCards, handleMouseDown)}
    </Style>
  );
};

export default Hand;
