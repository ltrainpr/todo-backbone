TodoBackbone.Routers.Items = Backbone.Router.extend({
	routes: {'': 'index', "todos/:id": "show"},
	
	initialize: function () {
		this.collection = new TodoBackbone.Collections.Items();
		return this.collection.fetch({
			reset: true
		});
	},

	index: function() {
		var view = new TodoBackbone.Views.ItemsIndex({
			collection: this.collection
		});
		return $('#container').html(view.render().el);
	},
	show: function(id) {
		alert("Item "+ id);
	}
});
