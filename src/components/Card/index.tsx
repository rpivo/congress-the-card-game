import React, { memo } from 'react';
import Style from './style';

type CardProps = {
  active: boolean;
  id: string;
  handleCardMouseDown: (id: string) => void;
  title: string;
};

const Card = ({ active, id, handleCardMouseDown, title }: Readonly<CardProps>): JSX.Element =>
  <Style
    className={`card${active ? ' active' : ''}`}
    onClick={(event: React.MouseEvent<HTMLInputElement>): void => event.stopPropagation()}
    onMouseDown={(): void => handleCardMouseDown(id)}>
    {title}
  </Style>;

export default memo(Card);
