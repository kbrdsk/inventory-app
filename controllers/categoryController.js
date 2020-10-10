const Category = require("../models/category");
const Item = require("../models/item");
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
	async get(req, res, next) {
		try {
			const [category, item_list] = await Promise.all([
				Category.findById(req.params.id),
				Item.find({ categories: req.params.id }, "name stock"),
			]);
			if (category === null) {
				const error = new Error("Category not found.");
				error.status = 404;
				next(error);
			}
			res.render("itemList", {
				title: `Category: ${category.name}`,
				item_list,
			});
		} catch (error) {
			res.render("categoryList", { error });
		}
	},
};

module.exports.create = {
	get(req, res, next) {
		res.render("categoryCreate");
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
