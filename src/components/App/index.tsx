import React from 'react';
import ArrowIcon from '@components/ArrowIcon';
import Hand from '@components/Hand';
import HandIcon from '@components/HandIcon';
import NotificationQueue from '@components/NotificationQueue';
import PlayArea from '@components/PlayArea';
import { Actions, Icons } from '@utilities/types';
import { Context, getDefaultState, Reducer } from './store';
import Style from './style';

const App = (): JSX.Element => {
  const [activeCard, setActiveCard] = React.useState(-1);
  const [state, dispatch] = React.useReducer(Reducer, getDefaultState());
  const { shouldShowHand } = state;

  const handleKeyboardEvent = React.useCallback(event => {
    if (event.code === 'Space') {
      if (shouldShowHand) dispatch({ type: Actions.HIDE_HAND });
      else dispatch({ type: Actions.SHOW_HAND });
    }
  }, [shouldShowHand]);

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyboardEvent);
    return () => window.removeEventListener('keydown', handleKeyboardEvent);
  }, [handleKeyboardEvent]);

  const handleAppClick = () => {
    if (activeCard > -1) setActiveCard(-1);
    if (shouldShowHand) dispatch({ type: Actions.HIDE_HAND });
  };

  const handleCardClick = (id: number) => {
    if (id === activeCard) id = -1;
    setActiveCard(id);
  };

  return (
    <Style className='app' onClick={handleAppClick}>
      <Context.Provider value={{ dispatch, state }}>
        <PlayArea activeCard={activeCard} handleCardClick={handleCardClick} />
        <ArrowIcon iconType={Icons.END_TURN} />
        <HandIcon />
        <Hand activeCard={activeCard} handleCardClick={handleCardClick} />
        <NotificationQueue />
      </Context.Provider>
    </Style>
  );
};

export default App;
