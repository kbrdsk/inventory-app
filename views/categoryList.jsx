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
				<ul>{props.category_list.map(renderCategory)}</ul>
			</main>
		</Default>
	);
};

function renderCategory(category) {
	return (
		<li>
			<a href={`/category/${category._id}`}>{category.name}</a>
		</li>
	);
}
