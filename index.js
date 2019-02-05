'use strict';

/**
 * Initializes wisedrops
 * @returns {{getAll: getAll, getCountry: getCountry, getSubdivision: getSubdivision}}
 */

const _ = require('lodash');
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
    wisedrops = require('./src');
  }

  return {
    getWiseDrop    : wisedrops.getWiseDrop,
    selectWiseDrop : wisedrops.selectWiseDrop,
  };
};
