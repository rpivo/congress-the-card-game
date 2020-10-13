import React from 'react';
import { render } from 'react-dom';
import App from '@components/App';
import AutomationProfiler from '@components/AutomationProfiler';

render(
  <AutomationProfiler id='rap-app'>
    <App />
  </AutomationProfiler>,
  document.getElementById('root'),
);
