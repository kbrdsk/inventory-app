const React = require("react");
const Default = require("./default");

module.exports = function CategoryForm(props) {
	const category = props.category;
	const title = category ? `Update Category: ${props.title}` : "New Category";
	return (
		<Default title={title}>
			<header>
				<h1>{title}</h1>
			</header>
			{props.errors ? <ul>{props.errors.map(renderError)}</ul> : null}
			<form method="POST" action="" className="create-update">
				<div className="form-group">
					<label htmlFor="name">Name: </label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Produce, Supplements, etc."
						value={category ? category.name : null}
					/>
				</div>
				<input type="submit" value="Submit" />
			</form>
		</Default>
	);
};

function renderError(error) {
	return <li className="form-error">{error.msg}</li>;
}
