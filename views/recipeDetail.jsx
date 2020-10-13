const React = require("react");
const Default = require("./default");

module.exports = function RecipeDetail(props) {
	const recipe = props.recipe;
	const title = `Recipe: ${recipe.name}`;
	return (
		<Default title={title}>
			<header>
				<h1>{title}</h1>
			</header>
			<main>
				<p className="time">
					<em>
						<span className="prep">
							Prep Time: {recipe.prep_time}
						</span>
						<span className="cooking">
							Cooking Time:{recipe.cooking_time}
						</span>
					</em>
				</p>

				<p>
					<strong>Ingredients:</strong>
				</p>
				<ul className="ingredients">
					{recipe.ingredients.map(renderIngredient)}
				</ul>

				<p>
					<strong>Instructions: </strong>
				</p>
				<ol className="instructions">
					{recipe.instructions.map(renderStep)}
				</ol>
			</main>

			<CRUDButtons recipe={recipe} />
		</Default>
	);
};

function renderStep(step) {
	return <li>{step}</li>;
}

function renderIngredient({ item, amount }) {
	return (
		<li>
			<a href={item.url} className="name">
				{item.name}
			</a>
			<span className="amount">{amount}</span>
			<span className="stock" stock={item.stock}>
				{item.stock}
			</span>
		</li>
	);
}

function CRUDButtons(props) {
	const recipe = props.recipe;
	return (
		<footer className="crud-container recipe">
			<a href={recipe.url + "/update"} className="update crud-button">
				Update
			</a>
			<a href={recipe.url + "/delete"} className="delete crud-button">
				Delete
			</a>
		</footer>
	);
}

