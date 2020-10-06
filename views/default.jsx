const React = require("react");

function DefaultLayout(props) {
	return (
		<html>
			<head>
				<meta charset="utf8" />
				<title>{props.title}</title>
			</head>
			<body>
				<NavBar />
				{props.children}
			</body>
		</html>
	);
}

function NavBar(props) {
	return (
		<nav>
			<ul className="sidebar-nav">
				<li>
					<a href="/inventory">Home</a>
				</li>
				<li>
					<a href="/inventory/item">Food Item</a>
				</li>
				<li>
					<a href="/inventory/category">Categories</a>
				</li>
				<li>
					<a href="/inventory/recipe">Recipes</a>
				</li>
				<hr />
				<li>
					<a href="/inventory/item/create">Create New Food Item</a>
				</li>
				<li>
					<a href="/inventory/category/create">Create New Category</a>
				</li>
				<li>
					<a href="/inventory/recipe/create">Create New Recipe</a>
				</li>
			</ul>
		</nav>
	);
}

module.exports = DefaultLayout;
