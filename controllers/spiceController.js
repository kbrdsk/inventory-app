const Spice = require("../models/spice");
const { body, validationResult } = require("express-validator/check");
const { sanitizeBody } = require("express-validator/filter");

module.exports.list = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Spice List");
	},
};


module.exports.detail = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Spice Detail");
	},
};

module.exports.create = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Spice Create Get");
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Spice Create Post");
	},
};

module.exports.update = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Spice Update Get");
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Spice Update Post");
	},
};

module.exports.delete = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Spice Delete Get");
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Spice Delete Post");
	},
};
