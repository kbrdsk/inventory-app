const Recipe = require("../models/recipe");
const Item = require("../models/item");
const { body, validationResult } = require("express-validator/check");
const { sanitizeBody } = require("express-validator/filter");

module.exports.list = {
	async get(req, res, next) {
		try {
			const recipe_list = await Recipe.find({});
			res.render("recipeList", { recipe_list });
		} catch (error) {
			res.render("recipeList", { error });
		}
	},
};

module.exports.detail = {
	async get(req, res, next) {
		try {
			const recipe = await Recipe.findById(req.params.id).populate({
				path: "ingredients",
				populate: {
					path: "item",
					model: "Item",
				},
			});
			if (recipe === null) {
				const error = new Error("Recipe not found");
				error.status = 404;
				next(error);
			}
			res.render("recipeDetail", { recipe });
		} catch (error) {
			res.render("recipeDetail", { error });
		}
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
	async get(req, res, next) {
		const recipe = await Recipe.findById(req.params.id);
		res.render("recipeDelete", { recipe });
	},
	async post(req, res, next) {
		await Recipe.findByIdAndDelete(req.params.id);
		res.redirect("/inventory/recipe");
	},
};
