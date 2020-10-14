const React = require("react");
const Default = require("./default");

module.exports = function RecipeForm(props) {
	const recipe = props.recipe;
	const title = props.updating
		? `Update Recipe: ${props.title}`
		: "New Recipe";
	return (
		<Default title={title}>
			<header>
				<h1>{title}</h1>
			</header>
			{props.errors ? <ul>{props.errors.map(renderError)}</ul> : null}
			<form method="POST" action="" className="create-update recipe">
				<div className="form-group">
					<label htmlFor="name">Name: </label>
					<input
						type="text"
						name="name"
						id="name"
						required={true}
						placeholder="The Best Recipe Ever?"
						defaultValue={recipe ? recipe.name : null}
					/>
				</div>
				<div className="form-group ingredients">
					<label htmlFor="ingredients">Ingredients: </label>
					<ul className="ingredients">
						{props.items.map(renderIngredient.bind(null, recipe))}
					</ul>
				</div>
				<div className="form-group instructions">
					<label htmlFor="instructions">Instructions: </label>
					<textarea
						name="instructions"
						id="instructions"
						cols="50"
						rows="10"
					></textarea>
				</div>
				<div className="form-group time">
					<label htmlFor="prep_time">
						{"Prep Time: "}
						<input
							type="number"
							name="prep_time"
							id="prep_time"
							min="0"
							defaultValue={recipe ? recipe.prep_time : null}
						/>
						{" minutes"}
					</label>
				</div>
				<div className="form-group time">
					<label htmlFor="cooking_time">
						{"Cooking Time: "}
						<input
							type="number"
							name="cooking_time"
							id="cooking_time"
							min="0"
							defaultValue={recipe ? recipe.cooking_time : null}
						/>
						{" minutes"}
					</label>
				</div>
				<div className="form-group">
					<label htmlFor="vegan">Vegan: </label>
					<input
						type="checkbox"
						name="vegan"
						id="vegan"
						defaultChecked={recipe ? recipe.vegan : null}
					/>
				</div>
				<input type="submit" value="Submit" />
			</form>
		</Default>
	);
};

function renderError(error) {
	return (
		<li className="form-error" key={error.msg}>
			{error.msg}
		</li>
	);
}

function renderIngredient(recipe, item) {
	return (
		<div key={item._id} className="ingredient">
			<div className="ingredient-name">
				<input
					type="checkbox"
					name="ingredients"
					id={item._id}
					value={item._id}
					defaultChecked={item.checked}
				/>
				<label htmlFor={item._id}>{item.name}</label>
			</div>
			<input
				type="text"
				name={item._id}
				placeholder="amount"
				className="amount"
				value={recipe ? getIngredientAmount(recipe, item._id) : null}
			/>
		</div>
	);
}

function getIngredientAmount(recipe, id) {
	const itemIndex = recipe.ingredients.findIndex(
		(ingredient) => ingredient.item.toString() === id.toString()
	);
	return itemIndex > -1 ? recipe.ingredients[itemIndex].amount : null;
}
