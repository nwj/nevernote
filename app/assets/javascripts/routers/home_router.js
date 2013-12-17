Nevernote.Routers.Home = Support.SwappingRouter.extend({
  initialize: function(options) {
    this.rootEl = $('.content');
  },

  routes: {
    "" : "all",
  },

  all: function(){
    var notebooksView = new Nevernote.Views.NotebooksIndex();
    this.swap(notebooksView, $('.notebooks'));

    var tagsView = new Nevernote.Views.TagsIndex();
    this.swap(tagsView, $('.tags'));
  },

  swap: function(newView, el) {
    if (this.currentView && this.currentView.leave) {
      this.currentView.remove();
    }

    this.currentView = newView;
    $(el).empty().append(this.currentView.render().el);
  }

});
