const React = require("react");
const Default = require("./default");

module.exports = function ItemList(props) {
	const title = props.title || "Food Items";
	return (
		<Default title={title}>
			<header>
				<h1>{title}</h1>
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
			<span className="stock" stock={item.stock}>{item.stock}</span>
		</li>
	);
}
