import React from 'react';
import Style from './style';

const ArrowIcon = (): JSX.Element =>
  <Style className='endTurnIcon'>
    <svg width='75' height='75' viewBox='0 0 703 703'>
      <g transform='translate(-398 -203)'>
        <path
          d='M136,136,0,272ZM0,0,136,136Z'
          transform='translate(805.5 418.5)'
          fill='none'
          stroke='#D0D0D0'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='100' />
        <line
          x2='385'
          transform='translate(556.5 554.5)'
          fill='none'
          stroke='#D0D0D0'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='100' />
      </g>
    </svg>
  </Style>;

export default React.memo(ArrowIcon);
