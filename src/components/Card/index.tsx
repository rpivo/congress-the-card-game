import React from 'react';
import Style from './style';

type CardProps = {
  ability1Description?: string;
  ability1Title?: string;
  active?: boolean;
  id: number;
  isHandCard?: boolean;
  handleCardMouseDown: (id: number, isHandCard?: boolean) => void;
  handleXIconClick?: (id: number) => void;
  mouseCoordinates?: { x: number; y: number };
  subtitle?: string;
  title?: string;
};

const Card = ({
  ability1Description,
  ability1Title,
  active,
  id,
  isHandCard,
  handleCardMouseDown,
  handleXIconClick = () => {},
  mouseCoordinates,
  subtitle,
  title,
}: Readonly<CardProps>): JSX.Element => {
  const [isMouseEnter, setIsMouseEnter] = React.useState(false);

  const handleOnMouseEnter = () => {
    if (!isHandCard) return;
    setIsMouseEnter(true);
  };

  return (
    <Style
      active={active}
      className={`card${active ? ' active' : ''}`}
      isHandCard={isHandCard}
      mouseCoordinates={mouseCoordinates}
      onClick={(event: React.MouseEvent<HTMLInputElement>): void => event.stopPropagation()}
      onMouseDown={(): void => handleCardMouseDown(id, isHandCard)}
      onMouseLeave={() => setIsMouseEnter(false)}
      onMouseEnter={handleOnMouseEnter}
    >
      {isHandCard && isMouseEnter && !active &&
        <span
          className='xIcon'
          onClick={(): void => handleXIconClick(id)}
          onMouseDown={(event: React.MouseEvent<HTMLInputElement>): void => event.stopPropagation()}
        >
          x
        </span>
      }
      <p className='title'>{title}</p>
      <p className={'subtext subtitle'}>{subtitle}</p>
      {ability1Title &&
        <p className='subtext ability1Title'>{ability1Title} - {ability1Description}</p>
      }
    </Style>
  );
};

export default React.memo(Card);
