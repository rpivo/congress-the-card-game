import React from 'react';
import Style from './style';

type ArrowIconProps = {
  isTakeIcon?: boolean;
};

const ArrowIcon = ({ isTakeIcon }: ArrowIconProps): JSX.Element =>
  <Style className={isTakeIcon ? 'takeIcon' : 'endTurnIcon'}>
    <svg width='50' height='50' viewBox='0 0 703 703'>
      <g transform='translate(-398 -203)'>
        {isTakeIcon &&
          <circle cx='351.5' cy='351.5' r='351.5' transform='translate(398 203)' fill='#707070' />
        }
        <path
          d='M136,136,0,272ZM0,0,136,136Z'
          transform='translate(805.5 418.5)'
          fill='none'
          stroke={isTakeIcon ? '#EAEAEA' : '#707070'}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='100' />
        <line
          x2='385'
          transform='translate(556.5 554.5)'
          fill='none'
          stroke={isTakeIcon ? '#EAEAEA' : '#707070'}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='100' />
      </g>
    </svg>
    {isTakeIcon && <p>Take a Card</p>}
  </Style>;

export default React.memo(ArrowIcon);
