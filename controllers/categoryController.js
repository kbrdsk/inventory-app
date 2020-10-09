const Category = require("../models/category");
const { body, validationResult } = require("express-validator/check");
const { sanitizeBody } = require("express-validator/filter");

module.exports.list = {
	async get(req, res, next) {
		try {
			const category_list = await Category.find({});
			res.render("categoryList", { category_list });
		} catch (error) {
			res.render("categoryList", { error });
		}
	},
};

module.exports.detail = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Category Detail");
	},
};

module.exports.create = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Category Create Get");
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Category Create Post");
	},
};

module.exports.update = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Category Update Get");
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Category Update Post");
	},
};

module.exports.delete = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Category Delete Get");
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Category Delete Post");
	},
};
