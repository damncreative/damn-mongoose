'use strict';

module.exports = function (schema) {
    schema.statics.findOneBy = function (by, value, done) {
        const search = {};
        search[key] = value;
        return this.findOne(search).exec(done);
    };
};
