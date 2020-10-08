const React = require("react");
const Default = require("./default");

module.exports = function Home(props){
	const title = "Food Inventory"
	return <Default title={title}>
		<main>
			<header><h1>{title}</h1></header>
			<p>An inventory of the food you might have in your house, along with
			recipes for using all that food!</p>
		</main>
	</Default>
}