TodoBackbone.Views.ItemsIndex = Backbone.View.extend({

  template: JST['items/index'],

  render: function() {
		$(this.el).html(this.template({items: "Items go here"}));
		return this;
  }
});
