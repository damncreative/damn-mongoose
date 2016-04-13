'use strict';

module.exports = function (schema) {
    schema.statics.findOneById = function (id, done) {
        return this.findOne({_id: id}).exec(done);
    };
};
