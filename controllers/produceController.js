const Produce = require("../models/produce");
const { body, validationResult } = require("express-validator/check");
const { sanitizeBody } = require("express-validator/filter");

module.exports.list = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Produce List");
	},
};


module.exports.detail = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Produce Detail");
	},
};

module.exports.create = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Produce Create Get");
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Produce Create Post");
	},
};

module.exports.update = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Produce Update Get");
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Produce Update Post");
	},
};

module.exports.delete = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Produce Delete Get");
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Produce Delete Post");
	},
};
