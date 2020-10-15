const Category = require("../models/category");
const Item = require("../models/item");
const validator = require("express-validator");
const adminpw = require("../admin_password").password;
const upload = require("multer")();

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
				category,
			});
		} catch (error) {
			res.render("categoryList", { error });
		}
	},
};

module.exports.create = {
	get(req, res, next) {
		res.render("categoryForm");
	},
	post: [
		upload.single("category_image"),
		validator
			.body("name", "Category name is required.")
			.trim()
			.isLength({ min: 3 }),
		validator.sanitizeBody("name").escape(),
		async (req, res, next) => {
			try {
				const errors = validator.validationResult(req);
				const category = new Category({
					name: req.body.name,
					image: req.file.buffer,
				});
				if (!errors.isEmpty()) {
					res.render("categoryForm", {
						category,
						errors: errors.array(),
					});
					return;
				} else {
					const found_category = await Category.findOne({
						name: req.body.name,
					});

					if (found_category) res.redirect(found_category.url);
					else {
						await category.save();
						res.redirect(category.url);
					}
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
			const category = await Category.findById(req.params.id);
			if (category === null) {
				const error = new Error("Category not found.");
				error.status = 404;
				next(error);
			}
			res.render("categoryForm", {
				category,
				title: category.name,
				updating: true,
			});
		} catch (error) {
			res.render("categoryList", { error });
		}
	},
	post: [
		//validation
		validator
			.body("name", "Category name is required.")
			.trim()
			.isLength({ min: 3 }),
		validator
			.body("password", "Invalid password")
			.custom((value) => value === adminpw),

		//sanitization
		validator.sanitizeBody("name").escape(),

		async (req, res, next) => {
			try {
				const errors = validator.validationResult(req);
				const title = (await Category.findById(req.params.id)).name;
				const category = new Category({
					name: req.body.name,
					_id: req.params.id,
				});
				if (!errors.isEmpty()) {
					res.render("categoryForm", {
						category,
						errors: errors.array(),
						updating: true,
						title,
					});
					return;
				} else {
					const found_category = await Category.findOne({
						name: req.body.name,
					});

					if (
						found_category &&
						found_category._id.toString() !==
							category._id.toString()
					) {
						const error = new Error("Category exists");
						error.msg = "A category with that name already exists";
						res.render("categoryForm", {
							category,
							title,
							errors: [error],
							updating: true,
						});
					} else {
						const updatedCategory = await Category.findByIdAndUpdate(
							req.params.id,
							category
						);
						res.redirect(category.url);
					}
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
			const [category, category_items] = await Promise.all([
				Category.findById(req.params.id),
				Item.find({ categories: req.params.id }),
			]);
			if (category === null) res.redirect("/inventory/category");
			res.render("categoryDelete", {
				category,
				category_items,
			});
		} catch (error) {
			next(error);
		}
	},
	post: [
		validator
			.body("password", "Invalid password")
			.custom((value) => value === adminpw),

		async (req, res, next) => {
			try {
				const errors = validator.validationResult(req).errors;
				const [category, category_items] = await Promise.all([
					Category.findById(req.body.categoryid),
					Item.find({ categories: req.body.categoryid }),
				]);
				if (category_items.length > 0 || errors.length > 0) {
					res.render("categoryDelete", {
						category,
						category_items,
						errors,
					});
				} else {
					await Category.findByIdAndRemove(req.body.categoryid);
					res.redirect("/inventory/category");
				}
			} catch (error) {
				next(error);
			}
		},
	],
};
