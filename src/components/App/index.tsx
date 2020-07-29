import React from 'react';
import Card from '@components/Card';
import Style from './style';

const App = () => 
  <Style>
    <div className='app'>
      <Card />
      <Card />
      <Card />
    </div>
  </Style>;

export default App;