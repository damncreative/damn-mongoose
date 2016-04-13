'use strict';

module.exports = function (schema) {
    schema.statics.findBy = function (by, value, done) {
        const search = {};
        search[key] = value;
        return this.find(search).exec(done);
    };
};
