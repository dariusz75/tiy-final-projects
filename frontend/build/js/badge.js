"use strict";

var React = require('react');

module.exports = React.createClass({ displayName: "exports",
	render: function render() {
		return React.createElement("button", { className: "btn btn-primary", type: "button" }, this.props.title, React.createElement("span", { className: "badge" }, this.props.number));
	}
});