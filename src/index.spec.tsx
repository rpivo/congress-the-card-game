import React from 'react';
import { render } from 'react-dom';
import App from '@components/App';

jest.mock("react-dom", () => ({
  render: jest.fn(),
}));

beforeEach(() => {
  document.body.innerHTML = `<div id = "root"></div>`;
});

describe('index', () => {
  it('should call ReactDOM.render', () => {
    require('./index');
    expect(render).toHaveBeenCalledWith(
      <App />,
      document.getElementById('root')
    );
  });
});
