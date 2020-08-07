import React, { memo } from 'react';
import Style from './style';

type CardProps = {
  active: boolean;
  id: string;
  handleCardMouseDown: (id: string) => void;
  subtitle: string;
  title: string;
};

const Card = ({
  active,
  id,
  handleCardMouseDown,
  subtitle,
  title,
}: Readonly<CardProps>): JSX.Element =>
  <Style
    className={`card${active ? ' active' : ''}`}
    onClick={(event: React.MouseEvent<HTMLInputElement>): void => event.stopPropagation()}
    onMouseDown={(): void => handleCardMouseDown(id)}>
    <p className='title'>{title}</p>
    <p className={'subtitle'}>{subtitle}</p>
  </Style>;

export default memo(Card);
