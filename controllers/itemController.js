const Item = require("../models/item");
const { body, validationResult } = require("express-validator/check");
const { sanitizeBody } = require("express-validator/filter");

module.exports.list = {
	async get(req, res, next) {
		try {
			const item_list = await Item.find({});
			res.render("itemList", { item_list });
		} catch (error) {
			res.render("itemList", { error });
		}
	},
};

module.exports.detail = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Item Detail");
	},
};

module.exports.create = {
	get(req, res, next) {
		res.send("TO BE IMPLEMENTED: Item Create Get");
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
