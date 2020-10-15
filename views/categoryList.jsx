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
				<ul className="recipe-list">
					{props.category_list.map(renderCategory)}
				</ul>
			</main>
			<footer>
				<a
					href="/inventory/category/create"
					className="crud-button create"
				>
					New Category
				</a>
			</footer>
		</Default>
	);
};

function renderCategory(category) {
	const image = category.image;
	const imagesrc = image
		? `data:${image.mimetype};base64,${image.data.toString("base64")}`
		: null;
	return (
		<li>
			{category.image ? <img src={imagesrc} alt={category.name} /> : null}
			<a href={category.url}>
				<span className="name">{category.name}</span>
			</a>
		</li>
	);
}
