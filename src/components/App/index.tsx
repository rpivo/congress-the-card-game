import React from 'react';
import ArrowIcon from '@components/ArrowIcon';
import Hand from '@components/Hand';
import HandIcon from '@components/HandIcon';
import NotificationQueue from '@components/NotificationQueue';
import PlayArea from '@components/PlayArea';
import { Actions } from '@utilities/types';
import { Context, getDefaultState, Reducer } from './store';
import Style from './style';

const App = (): JSX.Element => {
  const [activeCard, setActiveCard] = React.useState(-1);
  const [state, dispatch] = React.useReducer(Reducer, getDefaultState());
  const { shouldShowHand } = state;

  const handleClick = () => {
    if (activeCard > -1) setActiveCard(-1);
    if (shouldShowHand) dispatch({ type: Actions.HIDE_HAND });
  };

  return (
    <Style className='app' onClick={handleClick}>
      <Context.Provider value={{ dispatch, state }}>
        <PlayArea activeCard={activeCard} setActiveCard={setActiveCard} />
        <ArrowIcon iconType='END_TURN' />
        <HandIcon />
        <Hand />
        <NotificationQueue />
      </Context.Provider>
    </Style>
  );
};

export default App;
