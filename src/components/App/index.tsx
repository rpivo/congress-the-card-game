import React, { useState } from 'react';
import Hand from '@components/Hand';
import HandIcon from '@components/HandIcon';
import PlayArea from '@components/PlayArea';
import Style from './style';

const App = (): JSX.Element => {
  const [activeCard, setActiveCard] = useState('');
  const [shouldDisplayHand, setShouldDisplayHand] = useState(false);

  const handleClick = () => {
    setActiveCard('');
    setShouldDisplayHand(false);
  };

  return (
    <Style className='app' onClick={() => (activeCard || shouldDisplayHand) && handleClick()}>
      <PlayArea activeCard={activeCard} setActiveCard={setActiveCard} />
      <HandIcon setShouldDisplayHand={setShouldDisplayHand} />
      <Hand shouldDisplayHand={shouldDisplayHand} />
    </Style>
  );
};

export default App;
