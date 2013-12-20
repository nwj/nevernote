Nevernote.Routers.Home = Support.SwappingRouter.extend({
  initialize: function(options) {
    this.el = $("div#content");
  },

  routes: {
    "" : "home",
  },

  home: function() {
    var view = new Nevernote.Views.Home();
    this.swap(view);
  }

});
