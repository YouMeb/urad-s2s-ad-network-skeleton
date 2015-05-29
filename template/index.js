'use strict';

var util = require('util');
var assert = require('assert');
var merge = require('merge-descriptors');
var AdNetwork = require('s2s-ad-network');
var placeholders = require('./placeholders');

module.exports = {{ classname }};

util.inherits({{ classname }}, AdNetwork);

function {{ classname }}() {
  AdNetwork.call(this, '{{ basename }}');
}

merge(Aarki.prototype, {
  postbackUrl: '',

  placeholders: placeholders,

  validatePostbackData(click, transaction) {
  },

  validatePostbackResopnse(res) {
    assert(res.status === 200);
  }
});

