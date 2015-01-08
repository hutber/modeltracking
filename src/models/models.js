/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
	, Schema = mongoose.Schema
	, crypto = require('crypto')

/**
 * Model Schema
 */

var ModelSchema = new Schema({
	name: String,
	army: String,
	tags: Array,
	own: Boolean,
	desire: Number,
	startDate: { type: Date, default: Date.now},
	finishDate: { type: Date, default: Date.now},
	addedDate: { type: Date, default: Date.now},
})

mongoose.model('Model', ModelSchema);
