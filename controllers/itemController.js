const Item = require("../models/item");
const Category = require("../models/category");
const Recipe = require("../models/recipe");
const validator = require("express-validator");

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
		const categories = await Category.find();
		res.render("itemForm", { categories });
	},
	post: [
		(req, res, next) => {
			if (!Array.isArray(req.body.categories)) {
				req.body.categories = req.body.categories
					? new Array(req.body.categories)
					: [];
			}
			next();
		},

		//validation
		validator
			.body("name", "Name must not be empty.")
			.trim()
			.isLength({ min: 1 }),
		validator
			.body("stock", "Stock must not be empty.")
			.trim()
			.isLength({ min: 1 }),
		validator
			.body(
				"expiration",
				"Items in stock must have a valid expiration date."
			)
			.if((value, { req }) => req.body.stock !== "Out")
			.isISO8601(),

		//sanitization
		validator.body("name").escape(),
		validator.body("expiration").toDate(),

		async (req, res, next) => {
			try {
				const errors = validator.validationResult(req);
				const item = new Item({
					name: req.body.name,
					stock: req.body.stock,
					categories: req.body.categories,
					expiration: req.body.expiration,
					vegan: req.body.vegan === "on",
				});
				if (!errors.isEmpty()) {
					const categories = await Category.find();
					categories.forEach((category) => {
						if (item.categories.includes(category._id.toString()))
							category.checked = true;
					});
					res.render("itemForm", {
						item,
						categories,
						errors: errors.array(),
					});
					return;
				} else {
					await item.save();
					res.redirect(item.url);
				}
			} catch (error) {
				next(error);
			}
		},
	],
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
			res.render("itemForm", {
				categories,
				item,
				title: item.name,
				updating: true,
			});
		} catch (error) {
			res.render("itemDetail", { item, error });
		}
	},
	post: [
		(req, res, next) => {
			if (!Array.isArray(req.body.categories)) {
				if (typeof req.body.categories === "undefined")
					req.body.categories = [];
				else req.body.categories = new Array(req.body.categories);
			}
			next();
		},

		//validation
		validator
			.body("name", "Name must not be empty.")
			.trim()
			.isLength({ min: 1 }),
		validator
			.body("stock", "Stock must not be empty.")
			.trim()
			.isLength({ min: 1 }),
		validator
			.body(
				"expiration",
				"Items in stock must have a valid expiration date."
			)
			.if((value, { req }) => req.body.stock !== "Out")
			.isISO8601(),

		//sanitization
		validator.body("name").escape(),
		validator.body("expiration").toDate(),

		async (req, res, next) => {
			try {
				const errors = validator.validationResult(req);
				const title = (await Item.findById(req.params.id)).name;
				const item = new Item({
					name: req.body.name,
					stock: req.body.stock,
					categories: req.body.categories,
					expiration: req.body.expiration,
					vegan: req.body.vegan === "on",
					_id: req.params.id,
				});
				if (!errors.isEmpty()) {
					const categories = await Category.find();
					categories.forEach((category) => {
						if (item.categories.includes(category._id.toString()))
							category.checked = true;
					});
					res.render("itemForm", {
						item,
						categories,
						title,
						errors: errors.array(),
						updating: true,
					});
					return;
				} else {
					const updatedItem = await Item.findByIdAndUpdate(
						req.params.id,
						item
					);
					res.redirect(updatedItem.url);
				}
			} catch (error) {
				next(error);
			}
		},
	],
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
	async post(req, res, next) {
		try {
			const [item, item_recipes] = await Promise.all([
				Item.findById(req.params.id),
				Recipe.find({ "ingredients.item": req.params.id }),
			]);
			if (item_recipes.length > 0) {
				res.render("itemDelete", {
					item,
					item_recipes,
				});
			} else {
				await Item.findByIdAndRemove(req.body.itemid);
				res.redirect("/inventory/item");
			}
		} catch (error) {
			next(error);
		}
	},
};
