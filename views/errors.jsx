const React = require("react");

module.exports = function Errors(props) {
	return <ul>{props.errors.map(renderError)}</ul>;
};

function renderError(error) {
	return (
		<li className="form-error" key={error.msg}>
			{error.msg}
		</li>
	);
}
