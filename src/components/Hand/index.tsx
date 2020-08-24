import React from 'react';
import { Context } from '@components/App/store';
import Card from '@components/Card';
import Style from './style';

const Hand = (): JSX.Element => {
  const { state } = React.useContext(Context);
  const { cardOrder, shouldShowHand } = state;
  console.log('Hand / 9 / cardOrder', cardOrder);
  const handleMouseDown = () => null;
  return (
    <Style
      className={`hand${shouldShowHand ? '' : ' hidden'}`}
      onClick={(event: React.MouseEvent<HTMLInputElement>): void => event.stopPropagation()}>
      <Card id={'0'} handleCardMouseDown={handleMouseDown} />
      <Card id={'0'} handleCardMouseDown={handleMouseDown} />
      <Card id={'0'} handleCardMouseDown={handleMouseDown} />
    </Style>
  );
};

export default Hand;
