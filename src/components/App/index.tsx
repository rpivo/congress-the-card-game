import React, { createContext, useState } from 'react';
import Hand from '@components/Hand';
import HandIcon from '@components/HandIcon';
import PlayArea from '@components/PlayArea';
import Style from './style';

type Context = {
  setShouldDisplayHand: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext({} as Context);

const App = (): JSX.Element => {
  const [activeCard, setActiveCard] = useState('');
  const [shouldDisplayHand, setShouldDisplayHand] = useState(false);

  const handleClick = () => {
    setActiveCard('');
    setShouldDisplayHand(false);
  };

  return (
    <Style className='app' onClick={() => (activeCard || shouldDisplayHand) && handleClick()}>
      <AppContext.Provider value={{ setShouldDisplayHand }}>
        <PlayArea
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          shouldDisplayHand={shouldDisplayHand} />
        <HandIcon />
        <Hand shouldDisplayHand={shouldDisplayHand} />
      </AppContext.Provider>
    </Style>
  );
};

export default App;
