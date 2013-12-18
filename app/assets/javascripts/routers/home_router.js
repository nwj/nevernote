Nevernote.Routers.Home = Support.SwappingRouter.extend({
  initialize: function(options) {
    this.el = $("div#content");
  },

  routes: {
    "" : "all",
    "notebooks/:id" : "showNotebook",
    "tags/:id" : "showTag"
  },

  all: function() {
    var homeRouter = this;

    Nevernote.current_name = "All Notes";
    Nevernote.notes = new Nevernote.Collections.Notes();

    Nevernote.notes.fetch({
        success: function() {
            var view = new Nevernote.Views.Home();
            homeRouter.swap(view);
        }
    });
  },

  showNotebook: function(id) {
    var homeRouter = this;

    var notebook = Nevernote.notebooks.get(id)
    Nevernote.current_name = notebook.get('name');

    notebook.fetch({
        success: function() {
            Nevernote.notes = notebook.get('notes')
            var view = new Nevernote.Views.Home();
            homeRouter.swap(view);
        }
    });
  },

  showTag: function(id) {
    var homeRouter = this;

    var tag = Nevernote.tags.get(id)
    Nevernote.current_name = tag.get('name');

    tag.fetch({
        success: function() {
            Nevernote.notes = tag.get('notes');
            var view = new Nevernote.Views.Home();
            homeRouter.swap(view);
        }
    });
  }
});
