const React = require("react");
const Default = require("./default");
const Errors = require("./errors");

module.exports = function ItemDelete(props) {
	const item = props.item;
	const itemRecipes =
		props.item_recipes.length > 0 ? props.item_recipes : null;
	const title = `Delete Item: ${item.name}`;
	return (
		<Default title={title}>
			<header>
				<h1>{title}</h1>
			</header>
			{props.errors ? <Errors errors={props.errors} /> : null}
			{itemRecipes ? (
				<ul className="to-be-deleted recipes">
					The following recipes must be edited or deleted before you
					can delete this item:
					{itemRecipes.map(renderRecipe)}
				</ul>
			) : (
				<form method="POST" action="" className="delete">
					<p>Are you sure you want to delete this item?</p>
					<input type="hidden" name="itemid" value={item._id} />
					<input type="submit" value="Delete" />
					<div className="form-group">
						<label htmlFor="password">Admin Password: </label>
						<input type="text" name="password" id="password" />
					</div>
				</form>
			)}
		</Default>
	);
};

function renderRecipe(item) {
	return (
		<li>
			<a href={item.url}>{item.name}</a>
		</li>
	);
}