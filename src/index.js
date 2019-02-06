'use strict';

const _ = require('lodash');
const wisedropsList = _.clone(require('../config/wisedrops.json'));

let wiseDropsArr = wisedropsList.slice();

function getRandomIndex(numOfWiseDrops) {
  return Math.floor(Math.random() * numOfWiseDrops);
}

function selectWiseDrop() {
  let numOfWiseDrops = wiseDropsArr.length;
  if (!numOfWiseDrops || numOfWiseDrops < 1) {
    wiseDropsArr = wisedropsList.slice();
    numOfWiseDrops = wiseDropsArr.length;
  }
  const index = getRandomIndex(numOfWiseDrops);
  return wiseDropsArr.splice(index, 1);
}

function getWiseDrop() {
  const { author, wisdom } = selectWiseDrop();
  /* eslint-disable no-console */
  console.log(author);
  console.log(wisdom);
  setTimeout(selectWiseDrop, 10000);
}

module.exports = {
  getWiseDrop,
  selectWiseDrop,
};
