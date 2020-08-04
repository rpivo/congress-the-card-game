import React, { memo } from 'react';
import Style from './style';

type CardProps = {
  readonly active: boolean;
  readonly index: number;
  readonly handleCardMouseDown: (index: number) => void;
};

const Card = ({ active, index, handleCardMouseDown }: CardProps): JSX.Element =>
  <Style
    className={`card${active ? ' active' : ''}`}
    onClick={(event: React.MouseEvent<HTMLInputElement>): void => event.stopPropagation()}
    onMouseDown={(): void => handleCardMouseDown(index)}>
    Hello
  </Style>;

export default memo(Card);
