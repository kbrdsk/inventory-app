const Protein = require("../models/protein");
const { body, validationResult } = require("express-validator/check");
const { sanitizeBody } = require("express-validator/filter");

module.exports.list = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Protein List");
	},
};


module.exports.detail = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Protein Detail");
	},
};

module.exports.create = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Protein Create Get");
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Protein Create Post");
	},
};

module.exports.update = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Protein Update Get");
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Protein Update Post");
	},
};

module.exports.delete = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Protein Delete Get");
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Protein Delete Post");
	},
};
