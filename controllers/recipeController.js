const Recipe = require("../models/recipe");
const Item = require("../models/item");
const validator = require("express-validator");

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
	async get(req, res, next) {
		const items = await Item.find();
		res.render("recipeForm", { items });
	},
	post: [
		(req, res, next) => {
			if (!Array.isArray(req.body.ingredients)) {
				req.body.ingredients = req.body.ingredients
					? new Array(req.body.ingredients)
					: [];
			}
			next();
		},

		//validation
		validator
			.body("name", "Name must not be empty.")
			.trim()
			.isLength({ min: 1 }),

		//sanitization
		validator.body("name").escape(),
		validator.body("instructions").escape(),

		async (req, res, next) => {
			try {
				const errors = validator.validationResult(req);
				const ingredients = req.body.ingredients.map((item) => {
					return { item, amount: req.body[item] };
				});
				console.log(req.body.instructions);
				const instructions = req.body.instructions.split("\r\n");
				console.log(instructions);
				const recipe = new Recipe({
					name: req.body.name,
					ingredients: ingredients,
					instructions: instructions,
					prep_time: req.body.prep_time,
					cooking_time: req.body.cooking_time,
					vegan: req.body.vegan === "on",
				});
				if (!errors.isEmpty()) {
					const items = await Item.find();
					items.forEach((item) => {
						if (
							recipe.ingredients.some(
								(ingredient) =>
									ingredient.item.toString() ===
									item._id.toString()
							)
						)
							item.checked = true;
					});
					res.render("recipeForm", {
						recipe,
						items,
						errors: errors.array(),
					});
					return;
				} else {
					await recipe.save();
					res.redirect(recipe.url);
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
			const recipe = await Recipe.findById(req.params.id);
			if (recipe === null) {
				const error = new Error("Recipe not found.");
				error.status = 404;
				next(error);
			}
			const items = await Item.find();
			items.forEach((item) => {
				if (
					recipe.ingredients.some(
						(ingredient) =>
							ingredient.item.toString() === item._id.toString()
					)
				)
					item.checked = true;
			});
			res.render("recipeForm", {
				items,
				recipe,
				title: recipe.name,
				updating: true,
			});
		} catch (error) {
			res.render("recipeDetail", { recipe, error });
		}
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
