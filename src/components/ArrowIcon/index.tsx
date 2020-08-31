/* eslint-disable react/jsx-key */
import React from 'react';
import { Actions, Context } from '@components/App/store';
import Style from './style';
import { createStringEnum } from '@utilities/types';

const Icons = createStringEnum([
  'DRAW_CARD',
  'END_TURN',
]);

type IconType = keyof typeof Icons;

type ArrowIconProps = {
  iconType: IconType;
};

const circleElement =
 <circle cx='351.5' cy='351.5' r='351.5' transform='translate(398 203)' fill='#707070' />;

const handleIconClick = (canDrawCard?: boolean, dispatch?: React.Dispatch<Actions>) =>
  !canDrawCard && dispatch && dispatch('END_TURN');

type IconTypeProps = [
  className: string,
  circle: typeof circleElement | null,
  paragraph: JSX.Element,
  handleClick: (canDrawCard?: boolean, dispatch?: React.Dispatch<Actions>) => void,
  height: string,
  width: string,
  stroke: string,
];

const drawCardIconProps: IconTypeProps = [
  'drawCardIcon',
  circleElement,
  <p>Take a Card</p>,
  () => null,
  '50',
  '50',
  '#EAEAEA',
];

const endCardIconProps: IconTypeProps = [
  'endTurnIcon',
  null,
  <p>End Turn</p>,
  handleIconClick,
  '75',
  '75',
  '#D0D0D0',
];

const ArrowIcon = ({ iconType }: ArrowIconProps): JSX.Element => {
  const { dispatch, state } = React.useContext(Context);
  const { canDrawCard } = state;

  const [
    className,
    circle,
    paragraph,
    handleClick,
    height,
    width,
    stroke,
  ] = iconType === 'DRAW_CARD' ? drawCardIconProps : endCardIconProps;

  return (
    <Style
      className={`${className}${iconType === 'END_TURN' && !canDrawCard ? ' endable' : ''}`}
      onClick={() => handleClick(canDrawCard, dispatch)}
    >
      <svg width={width} height={height} viewBox='0 0 703 703'>
        <g transform='translate(-398 -203)'>
          {circle}
          <path
            d='M136,136,0,272ZM0,0,136,136Z'
            transform='translate(805.5 418.5)'
            fill='none'
            stroke={stroke}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='100'
          />
          <line
            x2='385'
            transform='translate(556.5 554.5)'
            fill='none'
            stroke={stroke}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='100'
          />
        </g>
      </svg>
      {(iconType === 'DRAW_CARD' || !canDrawCard) && paragraph}
    </Style>
  );
};

export default React.memo(ArrowIcon);
