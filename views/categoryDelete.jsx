const React = require("react");
const Default = require("./default");

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
			{categoryItems ? (
				<ul className="items-to-be-deleted">
					This category must be removed from the following items
					before it can be deleted:
					{categoryItems.map(renderItem)}
				</ul>
			) : (
				<form method="POST" action="" className="delete">
					<p>Are you sure you want to delete this category?</p>
					<input type="submit" value="Delete" />
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
