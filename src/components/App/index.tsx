import React from 'react';
import ArrowIcon from '@components/ArrowIcon';
import Hand from '@components/Hand';
import HandIcon from '@components/HandIcon';
import NotificationQueue from '@components/NotificationQueue';
import PlayArea from '@components/PlayArea';
import SettingsIcon from '@components/SettingsIcon';
import { Actions, Icons } from '@utilities/enums';
import { Context, getDefaultState, Reducer } from './store';
import Style from './style';

export default (): JSX.Element => {
  const [activeCard, setActiveCard] = React.useState(-1);
  const [isCardMoving, setIsCardMoving] = React.useState(false);
  const [mouseCoordinates, setMouseCoordinates] = React.useState({ x: 0, y: 0 });

  const [state, dispatch] = React.useReducer(Reducer, getDefaultState());
  const { canDrawCard, shouldShowHand } = state;

  const handleKeyboardEvent = React.useCallback(event => {
    switch (event.code) {
      case 'Enter': {
        if (!canDrawCard) dispatch({ type: Actions.END_TURN });
        break;
      }
      case 'Space': {
        if (shouldShowHand) dispatch({ type: Actions.HIDE_HAND });
        else dispatch({ type: Actions.SHOW_HAND });
        break;
      }
      default:
        break;
    }
  }, [canDrawCard, shouldShowHand]);

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyboardEvent);
    return () => window.removeEventListener('keydown', handleKeyboardEvent);
  }, [handleKeyboardEvent]);

  React.useEffect(() => {
    if (isCardMoving) window.addEventListener('mousemove', handleCardMove);
    return () => window.removeEventListener('mousemove', handleCardMove);
  }, [isCardMoving]);

  const handleAppClick = () => {
    if (activeCard > -1) setActiveCard(-1);
    if (shouldShowHand) dispatch({ type: Actions.HIDE_HAND });
  };

  const handleCardClick = (id: number, isHandCard?: boolean) => {
    if (id === activeCard) id = -1;
    setActiveCard(id);
    if (isHandCard) setIsCardMoving(!isCardMoving);
  };

  const handleCardMove = (event: MouseEvent) => {
    console.log({ x: event.offsetX, y: event.offsetY });
    setMouseCoordinates({ x: event.offsetX, y: event.offsetY });
  };

  return (
    <Style className='app' onClick={handleAppClick}>
      <Context.Provider value={{ dispatch, state }}>
        <PlayArea activeCard={activeCard} handleCardClick={handleCardClick} />
        <SettingsIcon />
        <ArrowIcon iconType={Icons.END_TURN} />
        <HandIcon />
        <Hand
          activeCard={activeCard}
          handleCardClick={handleCardClick}
          mouseCoordinates={mouseCoordinates}
        />
        <NotificationQueue />
      </Context.Provider>
    </Style>
  );
};
