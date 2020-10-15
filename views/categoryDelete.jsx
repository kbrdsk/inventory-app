const React = require("react");
const Default = require("./default");
const Errors = require("./errors");

module.exports = function CategoryDelete(props) {
	const category = props.category;
	const categoryItems =
		props.category_items.length > 0 ? props.category_items : null;
	const title = `Delete Category: ${category.name}`;
	return (
		<Default title={title}>
			<header>
				<h1>{title}</h1>
			</header>
			{props.errors ? <Errors errors={props.errors} /> : null}
			{categoryItems ? (
				<ul className="to-be-deleted items">
					This category must be removed from the following items
					before it can be deleted:
					{categoryItems.map(renderItem)}
				</ul>
			) : (
				<form method="POST" action="" className="delete">
					<p>Are you sure you want to delete this category?</p>
					<input
						type="hidden"
						name="categoryid"
						value={category._id}
					/>
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

function renderItem(item) {
	return (
		<li>
			<a href={item.url}>{item.name}</a>
		</li>
	);
}
