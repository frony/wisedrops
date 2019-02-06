'use strict';

const _ = require('lodash');
const drops = require('./src');

let initialized;
let wisedrops;

/**
 * Initializes wisedrops
 * @function
 * @returns {{getWiseDrop, selectWiseDrop}}
 */
module.exports = () => {
  if (!initialized) {
    initialized = true;
    wisedrops = Object.assign({}, drops);
  }

  return {
    getWiseDrop: wisedrops.getWiseDrop,
    selectWiseDrop: wisedrops.selectWiseDrop,
  };
};
