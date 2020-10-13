const Item = require("../models/item");
const Category = require("../models/category");
const Recipe = require("../models/recipe");
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
		res.render("itemForm", { categories });
	},
	async post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Item Create Post");
	},
};

module.exports.update = {
	async get(req, res, next) {
		try {
			const item = await Item.findById(req.params.id).populate(
				"categories"
			);
			if (item === null) {
				const error = new Error("Item not found.");
				error.status = 404;
				next(error);
			}
			const categories = await Category.find({});
			categories.forEach((category) => {
				if (
					item.categories.some(
						(cat) => cat._id.toString() === category._id.toString()
					)
				)
					category.checked = true;
			});
			res.render("itemForm", { categories, item, title: item.name });
		} catch (error) {
			res.render("itemDetail", { item, error });
		}
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Item Update Post");
	},
};

module.exports.delete = {
	async get(req, res, next) {
		try {
			const [item, item_recipes] = await Promise.all([
				Item.findById(req.params.id),
				Recipe.find({ "ingredients.item": req.params.id }),
			]);
			if (item === null) res.redirect("/inventory/item");
			res.render("itemDelete", {
				item,
				item_recipes,
			});
		} catch (error) {
			next(error);
		}
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Item Delete Post");
	},
};
