import React from 'react';
import Style from './style';
import Card from '@components/Card';
import Deck from '@components/Deck';

const PlayArea = (): JSX.Element =>
  <Style className='playArea'>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Deck />
  </Style>;

export default PlayArea;
