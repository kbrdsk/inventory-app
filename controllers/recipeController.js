const Recipe = require("../models/recipe");
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
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Recipe Detail");
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
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Recipe Delete Get");
	},
	post(req, res, next) {
		res.send("TO BE IMPLEMENTED: Recipe Delete Post");
	},
};
