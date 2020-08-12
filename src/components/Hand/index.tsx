import React from 'react';
import Style from './style';

type HandProps = {
  shouldDisplayHand: boolean;
};

const Hand = ({ shouldDisplayHand }: Readonly<HandProps>): JSX.Element => {
  return (
    <Style
      className={`hand${shouldDisplayHand ? '' : ' hidden'}`}
      onClick={(event: React.MouseEvent<HTMLInputElement>): void => event.stopPropagation()}>
    </Style>
  );
};

export default Hand;
