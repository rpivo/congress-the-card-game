import React from 'react';
import Style from './style';

type HandProps = {
  shouldDisplayHand: boolean;
};

const Hand = ({ shouldDisplayHand }: HandProps): JSX.Element =>
  <Style
    className={`hand${shouldDisplayHand ? '' : ' hidden'}`}
    onClick={(event: React.MouseEvent<HTMLInputElement>): void => event.stopPropagation()}>
  </Style>;

export default Hand;
