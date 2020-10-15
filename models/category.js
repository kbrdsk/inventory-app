const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
	data: { type: Buffer },
	mimetype: { type: String },
});

const CategorySchema = new Schema({
	name: { type: String, required: true, minlength: 3, maxlength: 100 },
	image: ImageSchema,
});

CategorySchema.virtual("url").get(function () {
	return `/inventory/category/${this._id}`;
});

module.exports = mongoose.model("Category", CategorySchema);
