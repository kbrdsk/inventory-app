const React = require("react");
const Default = require("./default");

module.exports = function RecipeList(props) {
	const title = "Recipes";
	return (
		<Default title={title}>
			<header>
				<h1>{title}</h1>
			</header>
			<main>
				<ul className="recipe-list">
					{props.recipe_list.map(renderRecipe)}
				</ul>
			</main>
			<footer>
				<a
					href="/inventory/recipe/create"
					className="crud-button create"
				>
					New Recipe
				</a>
			</footer>
		</Default>
	);
};

function renderRecipe(recipe) {
	return (
		<li>
			<a href={recipe.url} className="recipe-link">
				<span className="name">{recipe.name}</span>
				<span className="vegan-indicator" isVegan={`${recipe.vegan}`}>
					{recipe.vegan ? "vegan" : "not vegan"}
				</span>
			</a>
		</li>
	);
}
