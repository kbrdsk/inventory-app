const Recipe = require("../models/recipe");
const { body, validationResult } = require("express-validator/check");
const { sanitizeBody } = require("express-validator/filter");

module.exports.list = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Recipe List");
	},
};


module.exports.detail = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Recipe Detail");
	},
};

module.exports.create = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Recipe Create Get");
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Recipe Create Post");
	},
};

module.exports.update = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Recipe Update Get");
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Recipe Update Post");
	},
};

module.exports.delete = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Recipe Delete Get");
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Recipe Delete Post");
	},
};
