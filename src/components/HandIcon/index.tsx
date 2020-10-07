import React from 'react';
import { Context } from '@components/App/store';
import { Actions } from '@utilities/types';
import Style from './style';

const HandIcon = (): JSX.Element => {
  const { dispatch, state } = React.useContext(Context);
  const { shouldShowHand } = state;

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
    if (!shouldShowHand) dispatch({ type: Actions.SHOW_HAND });
  };

  return (
    <Style
      className='handIcon'
      onClick={(event: React.MouseEvent<HTMLInputElement>) => handleClick(event)}
      title='Hand'
    >
      <svg width='445.805' height='421.425' viewBox='0 0 445.805 421.425'>
        <g transform='translate(-195.558 -456.564)'>
          <g
            className='svgCard'
            transform='matrix(0.995, 0.105, -0.105, 0.995, 392.732, 495.977)'
            fill='#707070'
            stroke='#fff'
            strokeWidth='12'>
            <rect width='250' height='350' rx='15' stroke='none' />
            <rect x='6' y='6' width='238' height='338' rx='9' fill='none' />
          </g>
          <g
            className='svgCard'
            transform='translate(290.401 516.605) rotate(-9)'
            fill='#707070'
            stroke='#fff'
            strokeWidth='12'>
            <rect width='250' height='350' rx='15' stroke='none' />
            <rect x='6' y='6' width='238' height='338' rx='9' fill='none' />
          </g>
          <g
            className='svgCard'
            transform='matrix(0.914, -0.407, 0.407, 0.914, 195.558, 558.248)'
            fill='#707070'
            stroke='#fff'
            strokeWidth='12'>
            <rect width='250' height='350' rx='15' stroke='none' />
            <rect x='6' y='6' width='238' height='338' rx='9' fill='none' />
          </g>
        </g>
      </svg>
    </Style>
  );
};

export default HandIcon;
