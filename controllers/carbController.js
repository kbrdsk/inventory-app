const Carb = require("../models/carb");
const { body, validationResult } = require("express-validator/check");
const { sanitizeBody } = require("express-validator/filter");

module.exports.list = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Carb List");
	},
};


module.exports.detail = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Carb Detail");
	},
};

module.exports.create = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Carb Create Get");
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Carb Create Post");
	},
};

module.exports.update = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Carb Update Get");
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Carb Update Post");
	},
};

module.exports.delete = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Carb Delete Get");
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Carb Delete Post");
	},
};
