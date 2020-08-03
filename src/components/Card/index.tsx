import React from 'react';
import Style from './style';

type CardProps = {
  readonly active: boolean;
  readonly index: number;
  readonly handleCardClick: (index: number) => void;
};

const Card = ({ active, index, handleCardClick }: CardProps): JSX.Element =>
  <Style
    className={`card${active ? ' active' : ''}`}
    onClick={(event: React.MouseEvent<HTMLInputElement>): void => event.stopPropagation()}
    onMouseDown={(): void => handleCardClick(index)}>
    Hello
  </Style>;

export default Card;
