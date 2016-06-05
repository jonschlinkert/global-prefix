/*!
 * global-prefix <https://github.com/jonschlinkert/global-prefix>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

require('mocha');
var path = require('path');
var assert = require('assert');
var isWindows = require('is-windows');
var prefix = require('./');

describe('prefix', function() {
  if (isWindows()) {
    it('should resolve the path to the windows global prefix:', function() {
      assert.equal(path.dirname(process.execPath), prefix);
    });
  } else {
    it('should resolve the path to the global prefix:', function() {
      if (process.env.DESTDIR) {
        assert.equal(path.join(process.env.DESTDIR, '/usr/local'), prefix);
      } else {
        assert.equal('/usr/local', prefix);
      }
    });
  }
});
