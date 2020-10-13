const Item = require("../models/item");
const Category = require("../models/category");
const { body, validationResult } = require("express-validator/check");
const { sanitizeBody } = require("express-validator/filter");

module.exports.list = {
	async get(req, res, next) {
		try {
			const item_list = await Item.find({}, "name stock");
			res.render("itemList", { item_list });
		} catch (error) {
			res.render("itemList", { error });
		}
	},
};

module.exports.detail = {
	async get(req, res, next) {
		try {
			const item = await Item.findById(req.params.id).populate(
				"categories"
			);
			if (item === null) {
				const error = new Error("Item not found");
				error.status = 404;
				next(error);
			}
			res.render("itemDetail", { item });
		} catch (error) {
			res.render("itemDetail", { error });
		}
	},
};

module.exports.create = {
	async get(req, res, next) {
		const categories = await Category.find({});
		res.render("itemForm", {categories});
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Item Create Post");
	},
};

module.exports.update = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Item Update Get");
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Item Update Post");
	},
};

module.exports.delete = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Item Delete Get");
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Item Delete Post");
	},
};
