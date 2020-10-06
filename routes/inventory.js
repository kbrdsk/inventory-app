const express = require("express");
const router = express.Router();

const controllers = {};
controllers.item = require("../controllers/itemController");
controllers.recipe = require("../controllers/recipeController");
controllers.category = require("../controllers/categoryController");

router.get("/", function (req, res, next) {
	res.render("default", { title: "Food Inventory" });
});

for (let collection of ["item", "recipe", "category"]) {
	const collectionRouter = express.Router();

	for (let crudVal of ["create", "update", "delete"]) {
		for (let method of ["get", "post"]) {
			collectionRouter[method](
				`/${crudVal}`,
				controllers[collection][crudVal][method]
			);
		}
	}

	collectionRouter.get("/:id", controllers[collection].detail.get);
	collectionRouter.get("/", controllers[collection].list.get);

	router.use(`/${collection}`, collectionRouter);
}

module.exports = router;
