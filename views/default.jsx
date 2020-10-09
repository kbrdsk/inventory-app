const React = require("react");

function DefaultLayout(props) {
	return (
		<html>
			<head>
				<meta charSet="utf8" />
				<link
					rel="stylesheet"
					href="/stylesheets/style.css"
					type="text/css"
				/>
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
					<a href="/inventory/category">Categories</a>
				</li>
				<li>
					<a href="/inventory/item">Food Items</a>
				</li>
				<li>
					<a href="/inventory/recipe">Recipes</a>
				</li>
			</ul>
		</nav>
	);
}

module.exports = DefaultLayout;
