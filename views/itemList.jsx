const React = require("react");
const Default = require("./default");

module.exports = function ItemList(props) {
	const title = props.title || "Food Items";
	return (
		<Default title={title}>
			<header>
				<h1>{title}</h1>
				{props.category ? (
					<CategoryCRUDButtons category={props.category} />
				) : null}
			</header>
			<main>
				<ul className="item-list">{props.item_list.map(renderItem)}</ul>
			</main>
		</Default>
	);
};

function renderItem(item) {
	return (
		<li className="item-listing">
			<span className="name">
				<a href={item.url}>{item.name}</a>
			</span>
			<span className="stock" stock={item.stock}>
				{item.stock}
			</span>
		</li>
	);
}

function CategoryCRUDButtons(props) {
	const category = props.category;
	return (
		<span className="crud-container category">
			<a href={category.url + "/update"} className="update crud-button">
				Update
			</a>
			<a href={category.url + "/delete"} className="delete crud-button">
				Delete
			</a>
		</span>
	);
}
