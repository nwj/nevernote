Nevernote.Routers.Home = Support.SwappingRouter.extend({
  initialize: function(options) {
    this.rootEl = $('.content');
  },

  routes: {
    "" : "all",
    "notebooks/:id" : "notebook_show",
    "tags/:id" : "tag_show"
  },

  all: function(){
    var homeRouter = this;
    Nevernote.current = null;
    Nevernote.notes.fetch()

    var notebooksView = new Nevernote.Views.NotebooksIndex();
    this.swap(notebooksView, $('.notebooks'));

    var tagsView = new Nevernote.Views.TagsIndex();
    this.swap(tagsView, $('.tags'));

    Nevernote.notes.fetch({
      success: function() {
        var notesView = new Nevernote.Views.NotesIndex();
        homeRouter.swap(notesView, $('.notes'));
      }
    });
  },

  notebook_show: function(id){
    var homeRouter = this;

    Nevernote.current = Nevernote.notebooks.get(id);

    Nevernote.current.fetch({
      success: function() {
        var notesView = new Nevernote.Views.NotesIndex();
        homeRouter.swap(notesView, $('.notes'));
      }
    });
  },

  tag_show: function(id){
    var homeRouter = this;

    Nevernote.current = Nevernote.tags.get(id);

    Nevernote.current.fetch({
      success: function() {
        var notesView = new Nevernote.Views.NotesIndex();
        homeRouter.swap(notesView, $('.notes'));
      }
    });
  },

  swap: function(newView, el) {
    if (this.currentView && this.currentView.leave) {
      this.currentView.remove();
    }

    this.currentView = newView;
    $(el).empty().append(this.currentView.render().el);
  }

});
