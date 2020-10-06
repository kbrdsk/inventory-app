const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
	name: { type: String, required: true, minlength: 3, maxlength: 100 },
	ingredients: [{ type: Schema.Types.ObjectId, ref: "Item" }],
	instructions: { type: String, required: true },
	prep_time: { type: Number },
	cooking_time: { type: Number },
	vegan: { type: Boolean, required: true },
});

module.exports = mongoose.model("Recipe", RecipeSchema);
