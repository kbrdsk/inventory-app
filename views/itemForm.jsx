const React = require("react");
const Default = require("./default");

module.exports = function ItemForm(props) {
	const item = props.item;
	const title = item ? `Update Item: ${props.title}` : "New Item";
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
						required={true}
						placeholder="Tofu, Broccoli, etc."
						defaultValue={item ? item.name : null}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="stock">Stock: </label>
					<select
						name="stock"
						id="stock"
						required={true}
						defaultValue={item ? item.stock : null}
					>
						{["Out", "Low", "Medium", "Full"].map((stockValue) => (
							<option key={stockValue} value={stockValue}>
								{stockValue}
							</option>
						))}
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="categories">Categories: </label>
					{props.categories.map(renderCategoryInput.bind(null, item))}
				</div>
				<div className="form-group">
					<label htmlFor="expiration">Expriation: </label>
					<input
						type="date"
						name="expiration"
						id="expiration"
						defaultValue={item ? item.expiration_data : null}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="vegan">Vegan: </label>
					<input
						type="checkbox"
						name="vegan"
						id="vegan"
						defaultChecked={item ? item.vegan : null}
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

function renderCategoryInput(item, category) {
	return (
		<span>
			<input
				type="checkbox"
				name="categories"
				key={category._id}
				id={category._id}
				defaultChecked={category.checked}
			/>
			<label htmlFor={category._id}>{category.name}</label>
		</span>
	);
}
