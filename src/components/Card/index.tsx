import React, { memo } from 'react';
import Style from './style';

type CardProps = {
  active: boolean;
  index: number;
  handleCardMouseDown: (index: number) => void;
  title: string;
};

const Card = ({ active, index, handleCardMouseDown, title }: Readonly<CardProps>): JSX.Element =>
  <Style
    className={`card${active ? ' active' : ''}`}
    onClick={(event: React.MouseEvent<HTMLInputElement>): void => event.stopPropagation()}
    onMouseDown={(): void => handleCardMouseDown(index)}>
    {title}
  </Style>;

export default memo(Card);
