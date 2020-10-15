const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const sassMiddleware = require("node-sass-middleware");
const createError = require("http-errors");
const compression = require("compression");
const helmet = require("helmet");

const inventoryRouter = require("./routes/inventory");

const app = express();

const mongoose = require("mongoose");
const dev_db_url = require("./db_url").string;
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
	"/",
	sassMiddleware({
		src: __dirname,
		dest: path.join(__dirname, "public"),
		indentedSyntax: false, // true = .sass and false = .scss
		debug: true,
		sourceMap: true,
	})
);

app.use(compression());
app.use(helmet());

app.use(express.static(path.join(__dirname, "public")));

app.use("/inventory", inventoryRouter);

app.get("/", (req, res) => {
	res.redirect("/inventory");
});

app.use((req, res, next) => {
	next(createError(404));
});

module.exports = app;
