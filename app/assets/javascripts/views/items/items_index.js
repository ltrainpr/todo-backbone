TodoBackbone.Views.ItemsIndex = Backbone.View.extend({

  template: JST['items/index'],

  events: {'submit #new_entry': 'createTodo'},

  initialize: function () {
		return this.collection.on('reset', this.render, this);
  },

  render: function() {
		$(this.el).html(this.template({todos: this.collection}));
		return this;
  },

  createTodo: function(event) {
		event.preventDefault();
		return this.collection.create({
			task: $('#new_todo').val()
		});
	}
});
