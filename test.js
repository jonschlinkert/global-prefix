/*!
 * global-prefix <https://github.com/jonschlinkert/global-prefix>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

require('mocha');
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const prefix = require('./');

describe('prefix', () => {
  it('should resolve the path to the windows global prefix', () => {
    if (process.platform === 'win32') {
      assert.equal(prefix, process.env.APPDATA ? path.join(process.env.APPDATA, 'npm') : path.dirname(process.execPath));
    }
  });

  it('should resolve the path to the global prefix', () => {
    assert(fs.existsSync(prefix));
  });
});
