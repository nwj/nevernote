Nevernote.Routers.Home = Support.SwappingRouter.extend({
  initialize: function(options) {
    this.el = $("div#content");
  },

  routes: {
    "" : "all",
  },

  all: function() {
    var view = new Nevernote.Views.Home();
    this.swap(view);
  },
});
