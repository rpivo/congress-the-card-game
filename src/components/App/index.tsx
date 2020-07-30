import React from 'react';
import Card from '@components/Card';
import Style from './style';

const App = (): JSX.Element =>
  <Style>
    <div className='app'>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </Style>;

export default App;
