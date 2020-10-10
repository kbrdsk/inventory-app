const React = require("react");
const Default = require("./default");

module.exports = function CategoryList(props) {
	const title = "Categories";
	return (
		<Default title={title}>
			<header>
				<h1>{title}</h1>
			</header>
			<main>
				<ul className="recipe-list">{props.category_list.map(renderCategory)}</ul>
			</main>
			<footer>
				<a href="/inventory/category/create">New Category</a>
			</footer>
		</Default>
	);
};

function renderCategory(category) {
	return (
		<li>
			<a href={category.url}>{category.name}</a>
		</li>
	);
}
