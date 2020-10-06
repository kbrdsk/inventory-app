const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
	name: { type: String, required: true, minlength: 3, maxlength: 100 },
	stock: {
		type: String,
		required: true,
		enum: ["Out", "Low", "Medium", "Full"],
		default: "Out",
	},
	categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
	expiration: { type: Date, required: true },
	vegan: { type: Boolean, required: true },
});

module.exports = mongoose.model("Item", ItemSchema);
