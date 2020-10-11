import React from 'react';
import { render } from 'react-dom';
import App from '@components/App';

window.profiler = [];

const handleRender = (
  id: string,
  phase: string,
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number,
  interactions: Set<{ id: number; name: string; timestamp: number; }>,
) => {
  window.profiler.push({
    actualDuration,
    baseDuration,
    commitTime,
    id,
    interactions,
    phase,
    startTime,
  });
};

render(
  <React.Profiler id='app-profiler' onRender={handleRender}>
    <App />
  </React.Profiler>,
  document.getElementById('root'),
);
