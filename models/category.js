const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
	name: { type: String, required: true, minlength: 3, maxlength: 100 },
});

module.exports = mongoose.model("Category", CategorySchema);
