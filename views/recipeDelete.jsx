const React = require("react");
const Default = require("./default");
const Errors = require("./errors");

module.exports = function RecipeDelete(props) {
	const recipe = props.recipe;
	const title = `Delete Recipe: ${recipe.name}`;
	return (
		<Default title={title}>
			<header>
				<h1>{title}</h1>
			</header>
			{props.errors ? <Errors errors={props.errors} /> : null}
			<form method="POST" action="" className="delete">
				<p>Are you sure you want to delete this recipe?</p>
				<input type="hidden" name="recipeid" value={recipe._id} />
				<input type="submit" value="Delete" />
				<div className="form-group">
					<label htmlFor="password">Admin Password: </label>
					<input type="text" name="password" id="password" />
				</div>
			</form>
		</Default>
	);
};
