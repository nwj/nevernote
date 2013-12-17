Nevernote.Routers.Home = Support.SwappingRouter.extend({
  initialize: function(options) {
    this.rootEl = $('.content');
    this.notebooks = options.notebooks;
    this.tags = options.tags;
  },

  routes: {
    "" : "all",
  },

  all: function(){
    var notebooksView = new Nevernote.Views.NotebooksIndex(
      { notebooks: this.notebooks }
    );
    this.swap(notebooksView, $('.notebooks'));

    var tagsView = new Nevernote.Views.TagsIndex(
      { tags: this.tags }
    );
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
