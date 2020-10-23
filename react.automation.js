/* eslint-disable sort-keys */
const CLICK = 'click';

module.exports = {
  'Toggle PlayArea Card Active': [
    CLICK, 'div.playArea div.card',
    CLICK, 'div.playArea',
  ],
  'Click Each PlayArea Card': [
    CLICK, 'div.playArea div.card:nth-of-type(1)',
    CLICK, 'div.playArea div.card:nth-of-type(2)',
    CLICK, 'div.playArea div.card:nth-of-type(3)',
    CLICK, 'div.playArea div.card:nth-of-type(4)',
    CLICK, 'div.playArea div.card:nth-of-type(5)',
    CLICK, 'div.playArea',
  ],
  'Draw Card': [
    CLICK, 'div.stackedCard',
    CLICK, 'div.playArea',
  ],
  'Show and Hide Hand': [
    CLICK, 'div.handIcon',
    CLICK, 'div.playArea',
  ],
};
