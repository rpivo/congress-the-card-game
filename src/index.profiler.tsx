import React from 'react';
import { render } from 'react-dom';
import App from '@components/App';

window.profiler = [];

export const handleRender = (
  id: string,
  phase: string,
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number,
  interactions: Set<{ id: number; name: string; timestamp: number; }>,
): void => {
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

type AutomationProfilerProps = {
  children: React.ReactNode;
  id: string;
};

export const AutomationProfiler: React.FC<AutomationProfilerProps> =
  ({ children, id }: AutomationProfilerProps): JSX.Element =>
    <React.Profiler id={id} onRender={handleRender}>
      {children}
    </React.Profiler>;

render(
  <AutomationProfiler id='profiler-app'>
    <App />
  </AutomationProfiler>,
  document.getElementById('root'),
);
