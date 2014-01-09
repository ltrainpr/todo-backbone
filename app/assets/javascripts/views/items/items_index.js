TodoBackbone.Views.ItemsIndex = Backbone.View.extend({

  template: JST['items/index'],

  events: {'submit #new_task': 'createTodo'},

  initialize: function () {
		this.collection.on('reset', this.render, this);
		return this.collection.on('add', this.appendTask, this);
  },

  render: function() {
		$(this.el).html(this.template({todos: this.collection}));
		this.collection.each(this.appendTask);
		return this;
  },

  appendTask: function(task) {
		var view = new TodoBackbone.Views.Task({model: task});
		return $('#task_list').append(view.render().el);
  },

  createTodo: function(event) {
		event.preventDefault();
		this.collection.create({
			task: $('#new_todo').val()
		});
		return $('#new_task')[0].reset();
	}
});
