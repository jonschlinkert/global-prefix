/*!
 * global-prefix <https://github.com/jonschlinkert/global-prefix>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

require('mocha');
var assert = require('assert');
var prefix = require('./');

describe('prefix', function() {
  it('should:', function() {
    assert.equal('/usr/local', prefix);
  });
});
