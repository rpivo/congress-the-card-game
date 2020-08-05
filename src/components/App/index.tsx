import React, { useState } from 'react';
import HandIcon from '@components/HandIcon';
import PlayArea from '@components/PlayArea';
import Style from './style';

const App = (): JSX.Element => {
  const [activeCard, setActiveCard] = useState(-1);
  return (
    <Style className='app' onClick={() => setActiveCard(-1)}>
      <PlayArea activeCard={activeCard} setActiveCard={setActiveCard} />
      <HandIcon />
    </Style>
  );
};

export default App;
