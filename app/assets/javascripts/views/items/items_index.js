TodoBackbone.Views.ItemsIndex = Backbone.View.extend({

  template: JST['items/index'],

  initialize: function () {
		return this.collection.on('reset', this.render, this);
  },

  render: function() {
		$(this.el).html(this.template({todos: this.collection}));
		return this;
  }
});
