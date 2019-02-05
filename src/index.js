'use strict';

const _ = require('lodash');
let wisedropsList = _.clone(require('../config/wisedrops.json'));
let wiseDropsArr = Object.assign({}, wisedropsList);

function getRandomIndex(numOfWiseDrops) {
  return Math.floor((Math.random() * numOfWiseDrops) + 1);
}

function selectWiseDrop() {
  let numOfWiseDrops = wiseDropsArr.length;
  if (numOfWiseDrops < 1) {
    wiseDropsArr = Object.assign({}, wisedropsList);
    numOfWiseDrops = wisedropsList.length;
  }
  const index = getRandomIndex(numOfWiseDrops);
  return wisedropsList.pop(index);
}

function getWiseDrop() {
  const {author, wisdom} = selectWiseDrop();
  console.log({author, wisdom});
  setTimeout(getWiseDrop, 10000);
}

module.exports = {
  getWiseDrop,
  selectWiseDrop,
};