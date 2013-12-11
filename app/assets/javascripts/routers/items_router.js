TodoBackbone.Routers.Items = Backbone.Router.extend({
	routes: {'': 'index', "items/:id": "show"},
	
	index: function () {
		alert("home page");
	},
	show: function (id) {
		alert("Item "+ id);
	}
});
