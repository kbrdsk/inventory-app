const React = require("react");

function DefaultLayout(props) {
	return (
		<html>
			<head>
				<meta charset="utf8" />
				<title>{props.title}</title>
			</head>
			<body>
				<h1>{props.children}</h1>
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
					<a href="/inventory/produce">Produce</a>
				</li>
				<li>
					<a href="/inventory/protein">Protein</a>
				</li>
				<li>
					<a href="/inventory/protein">Carbs</a>
				</li>
				<li>
					<a href="/inventory/spice">Spices</a>
				</li>
				<hr />
				<li>
					<a href="/inventory/produce/create">Create New Produce</a>
				</li>
				<li>
					<a href="/inventory/protein/create">Create New Protein</a>
				</li>
				<li>
					<a href="/inventory/carb/create">Create New Carb</a>
				</li>
				<li>
					<a href="/inventory/spice/create">Create New Spice</a>
				</li>
			</ul>
		</nav>
	);
}

module.exports = DefaultLayout;
