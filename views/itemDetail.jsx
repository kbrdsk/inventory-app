const React = require("react");
const Default = require("./default");

module.exports = function ItemDetail(props) {
	const item = props.item;
	const title = `Item: ${item.name}`;
	return (
		<Default title={title}>
			<header>
				<h1>{title}</h1>
			</header>
			<main>
				<p>
					<strong>Stock: </strong>
					{item.stock}
				</p>
				<p>
					<strong>Categories: </strong>
					{displayCategories(item.categories)}
				</p>
				{item.stock !== "Out" ? (
					<p>
						<strong>Expiration Date: </strong>
						{item.formatted_expiration}
					</p>
				) : null}
				<p>{item.vegan ? "Vegan" : "Not Vegan"}</p>
			</main>
			<CRUDButtons item={item} />
		</Default>
	);
};

function displayCategories(categories) {
	const lastIndex = categories.length - 1;
	const display = [];
	for (let i = 0; i <= lastIndex; i++) {
		display.push(renderCategory(categories[i]));
		if (i < lastIndex) display.push(", ");
	}
	return display;
}

function renderCategory(category) {
	return <a href={category.url}>{category.name}</a>;
}

function CRUDButtons(props) {
	const item = props.item;
	return (
		<footer className="crud-container item">
			<a href={item.url + "/update"} className="update crud-button">
				Update
			</a>
			<a href={item.url + "/delete"} className="delete crud-button">
				Delete
			</a>
		</footer>
	);
}
