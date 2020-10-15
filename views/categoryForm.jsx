const React = require("react");
const Default = require("./default");

module.exports = function CategoryForm(props) {
	const category = props.category;
	const title = props.updating
		? `Update Category: ${props.title}`
		: "New Category";
	return (
		<Default title={title}>
			<header>
				<h1>{title}</h1>
			</header>
			{props.errors ? <ul>{props.errors.map(renderError)}</ul> : null}
			<form
				method="POST"
				action=""
				className="create-update"
				encType="multipart/form-data"
			>
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
				<div className="form-group">
					<label htmlFor="category_image">Image: </label>
					<input
						type="file"
						name="category_image"
						id="category_image"
					/>
				</div>

				<input type="submit" value="Submit" />
				{props.updating ? (
					<div className="form-group">
						<label htmlFor="password">Admin Password: </label>
						<input type="text" name="password" id="password" />
					</div>
				) : null}
			</form>
		</Default>
	);
};

function renderError(error) {
	return <li className="form-error">{error.msg}</li>;
}
