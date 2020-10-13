const moment = require("moment");
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
	expiration: { type: Date },
	vegan: { type: Boolean, required: true },
});

ItemSchema.virtual("url").get(function () {
	return `/inventory/item/${this._id}`;
});

ItemSchema.virtual("formatted_expiration").get(function () {
	return moment(this.expiration).format("MMMM DD YYYY");
});

ItemSchema.virtual("expiration_data").get(function () {
	return moment(this.expiration).format("YYYY-MM-DD");
});

module.exports = mongoose.model("Item", ItemSchema);
