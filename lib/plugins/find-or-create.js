'use strict';

// TODO: Better error handle if callback or promise for first call
// TODO: plugin options?
module.exports = function (schema) {
    schema.statics.findOrCreate = function (search, newObject, done) {
        if (_.isFunction(done)) {
            this.findOne(search).exec((error, result) => {
                if (error) {
                    return done(error);
                }

                if(result) {
                    return done(null, result);
                }

                this.create(newObject, done);
            });
        } else {
            return this.find(search)
                .then( result => {
                    if(result) {
                        return result;
                    }

                    return this.create(newObject);
                })
        }
    };
};
