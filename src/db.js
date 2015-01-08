module.exports = function(app, config) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var fs = require('fs');

    mongoose.connect(config.db);

    app.locals.db = mongoose.connection;
    app.locals.db.on('error', console.error.bind(console, 'connection error:'));
    app.locals.db.once('open', function callback() {
        // yay!
    });

};