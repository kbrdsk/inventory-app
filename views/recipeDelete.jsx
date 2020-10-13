const React = require("react");
const Default = require("./default");

module.exports = function RecipeDelete(props) {
	const recipe = props.recipe;
	const title = `Delete Recipe: ${recipe.name}`;
	return (
		<Default title={title}>
			<header>
				<h1>{title}</h1>
			</header>
				<form method="POST" action="" className="delete">
					<p>Are you sure you want to delete this recipe?</p>
					<input
						type="hidden"
						name="recipeid"
						value={recipe._id}
					/>
					<input type="submit" value="Delete" />
				</form>
		</Default>
	);
};