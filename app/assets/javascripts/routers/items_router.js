TodoBackbone.Routers.Items = Backbone.Router.extend({
	routes: {'': 'index', "items/:id": "show"},
	
	index: function() {
		var view = new TodoBackbone.Views.ItemsIndex();
		return $('#container').html(view.render().el);
	},
	show: function(id) {
		alert("Item "+ id);
	}
});
