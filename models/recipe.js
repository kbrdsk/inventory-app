const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeItemSchema = new Schema({
	item: { type: Schema.Types.ObjectId, ref: "Item", required: true },
	amount: { type: String, required: true },
});

const RecipeSchema = new Schema({
	name: { type: String, required: true, minlength: 3, maxlength: 100 },
	ingredients: [RecipeItemSchema],
	instructions: [String],
	prep_time: { type: Number },
	cooking_time: { type: Number },
	vegan: { type: Boolean, required: true },
});

RecipeSchema.virtual("url").get(function () {
	return `/inventory/recipe/${this._id}`;
});

module.exports = mongoose.model("Recipe", RecipeSchema);
