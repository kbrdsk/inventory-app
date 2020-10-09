const React = require("react");
const Default = require("./default");

module.exports = function Home(props) {
	const title = "Food Inventory";
	return (
		<Default title={title}>
			<main>
				<header>
					<h1>{title}</h1>
				</header>
				<p>
					An inventory of the food you might have in your house, along
					with recipes for using all that food!
				</p>
				<hr />
				<h4>The inventory currently has:</h4>
				<ul>
					<li>
						{props.categoryCount}{" "}
						<a href="inventory/category" className="discreet">
							{props.categoryCount > 1
								? "categories"
								: "category"}
						</a>
					</li>
					<li>
						{props.itemCount}{" "}
						<a href="/inventory/item" className="discreet">
							{"item"}
							{props.itemCount > 1 ? "s" : ""}
						</a>
					</li>
					<li>
						{props.recipeCount}{" "}
						<a href="/inventory/recipe" className="discreet">
							{"recipe"}
							{props.recipeCount > 1 ? "s" : ""}
						</a>
					</li>
				</ul>
			</main>
		</Default>
	);
};
