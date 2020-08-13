import React from 'react';
import { Context } from '@components/App/store';
import Style from './style';

const Hand = (): JSX.Element => {
  const { state } = React.useContext(Context);
  const { shouldDisplayHand } = state;
  return (
    <Style
      className={`hand${shouldDisplayHand ? '' : ' hidden'}`}
      onClick={(event: React.MouseEvent<HTMLInputElement>): void => event.stopPropagation()}>
    </Style>
  );
};

export default Hand;
