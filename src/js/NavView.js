var m = require("mithril");
var Nav = require("./Nav");
var Tree = require("./Tree");
var SearchResults = require("./SearchResults");
var Articles = require("./Articles");

var NavView = {
	oninit: function() {
		Nav.init();
	},
	view: function() {
		return m("div.sidebar", [
			m("h1", "Ents24 Systems Docs"),
			m("div.form-group", [
				m("button.btn.btn-default", {onclick: Articles.new}, "New"),
				m("label.btn.btn-default", [
					Nav.uploading ? m("i.fa.fa-circle-o-notch.fa-spin") : null,
					" Upload ",
					m("i.fa.fa-upload"),
					m("input[type=file]", {onchange: Nav.upload, style:"display: none;"})
				]),
			]),
			Nav.error ? Nav.error : null,
			m("div.input-group", [
				m("input.form-control.input-sm", {placeholder: "Search", type: "text", oninput: m.withAttr("value", Nav.search), value: Nav.query}),
				m("a.input-group-addon.input-sm", {onclick:  Nav.clearResults}, m("i.fa.fa-times ")),
			]),
			Nav.results.length > 0 ? m(SearchResults, {results: Nav.results}): null,
			m(Tree, {tree : Nav.list}),
		]);
	}
};

module.exports = NavView;