'use strict';

const lib = require('..');

before(function () {
    this.lib = lib;
});

describe('damn-mongoose', function () {
    it('should be an Object', function () {
        this.lib.should.be.an.Object();
    });
});
