window.TodoBackbone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new TodoBackbone.Routers.Items();
    Backbone.history.start({pushState: true});
  }
};

$(document).ready(function(){
  TodoBackbone.initialize();
});
