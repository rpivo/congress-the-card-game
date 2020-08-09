import React from 'react';
import Style from './style';

type HandProps = {
  shouldDisplayHand: boolean;
};

const Hand = ({ shouldDisplayHand }: HandProps): JSX.Element =>
  <Style className={`hand${shouldDisplayHand ? '' : ' hidden'}`}></Style>;

export default Hand;
