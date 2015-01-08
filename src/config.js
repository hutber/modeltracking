var convict = require('convict');

var conf = convict({
	env: {
		doc: 'The applicaton environment.',
		format: ['production', 'development', 'test'],
		default: 'development',
		env: 'NODE_ENV'
	},
	port: {
		doc: 'The port to bind.',
		format: 'port',
		default: 0,
		env: 'PORT'
	}
});


// Load environment dependent configuration
var env = conf.get('env');
conf.loadFile(__dirname + '../../../config/' + env + '.json');

// Perform validation
conf.validate();

module.exports = conf;
