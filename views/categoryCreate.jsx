const React = require("react");
const Default = require("./default");

module.exports = function CategoryCreate(props) {
	const title = "New Category";
	return (
		<Default title={title}>
			<header>
				<h1>{title}</h1>
			</header>
			<form method="POST" action="">
				<div className="form-group">
					<label htmlFor="name">Category Name: </label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Produce, Supplements, etc."
					/>
				</div>
				<input type="submit" value="Submit" />
			</form>
		</Default>
	);
};
