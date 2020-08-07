import React, { memo } from 'react';
import Style from './style';

type CardProps = {
  ability1Title?: string;
  active: boolean;
  id: string;
  handleCardMouseDown: (id: string) => void;
  subtitle: string;
  title: string;
};

const Card = ({
  ability1Title,
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
    <p className={'subtext subtitle'}>{subtitle}</p>
    {ability1Title && <p className='subtext ability1Title'>{ability1Title}</p>}
  </Style>;

export default memo(Card);
