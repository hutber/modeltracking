
var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  //, templatePath = path.normalize(__dirname + '/../app/mailer/templates');

module.exports = {
  development: {
    db: 'mongodb://localhost/modeltracking',
    root: rootPath,
    app: {
      name: 'Nodejs Passport Boilerplate Demo'
    }
  },
  test: {
    db: 'mongodb://localhost/noobjs_test',
    root: rootPath,
    app: {
      name: 'Nodejs Express Mongoose Demo'
    }
  },
  production: {}
}
c = false;
if (typeof console === "object" && typeof console.error === "function") {
  c = function (msg) {
    console.info(msg);
  };
} else {
  c = function (msg) {
    debug(msg);
    console.info(msg);
  };
}