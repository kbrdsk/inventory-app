const express = require("express");
const router = express.Router();

const controllers = {};
controllers.produce = require("../controllers/produceController");
controllers.protein = require("../controllers/proteinController");
controllers.carb = require("../controllers/carbController");
controllers.spice = require("../controllers/spiceController");

router.get("/", function (req, res, next) {
	res.render("default", { title: "Food Inventory" });
});

for (let category of ["produce", "protein", "carb", "spice"]) {
	const categoryRouter = express.Router();

	for (let crudVal of ["create", "update", "delete"]) {
		for (let method of ["get", "post"]) {
			categoryRouter[method](
				`/${crudVal}`,
				controllers[category][crudVal][method]
			);
		}
	}

	categoryRouter.get("/:id", controllers[category].detail.get);
	categoryRouter.get("/", controllers[category].list.get);

	router.use(`/${category}`, categoryRouter);
}

module.exports = router;
