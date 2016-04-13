'use strict';

module.exports = function (schema) {
    schema.statics.findById = function (id, done) {
        return this.find({_id: id}).exec(done);
    };
};
