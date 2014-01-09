TodoBackbone.Views.Task = Backbone.View.extend ({
	
	template: JST['items/task'],

	tagName: 'li',

	render: function(){
		$(this.el).html(this.template({
			task: this.model
		}));
		return this;
	}
});