import React from 'react';
import ArrowIcon from '@components/ArrowIcon';
import Hand from '@components/Hand';
import HandIcon from '@components/HandIcon';
import PlayArea from '@components/PlayArea';
import { Context, Reducer, State } from './store';
import Style from './style';

const App = (): JSX.Element => {
  const [activeCard, setActiveCard] = React.useState('');
  const [state, dispatch] = React.useReducer(Reducer, State);
  const { shouldShowHand } = state;

  const handleClick = () => {
    if (activeCard) setActiveCard('');
    if (shouldShowHand) dispatch('HIDE_HAND');
  };

  return (
    <Style className='app' onClick={handleClick}>
      <Context.Provider value={{ dispatch, state }}>
        <PlayArea activeCard={activeCard} setActiveCard={setActiveCard} />
        <ArrowIcon iconType='END_TURN' />
        <HandIcon />
        <Hand />
      </Context.Provider>
    </Style>
  );
};

export default App;
