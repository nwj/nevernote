window.Nevernote = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(data) {
    this.notebooks = new Nevernote.Collections.Notebooks(data.notebooks);
    this.tags = new Nevernote.Collections.Tags(data.tags);
    this.notes = new Nevernote.Collections.Notes(data.notes);
    this.note = this.notes.at(0);
    this.current = null;

    Nevernote.router = new Nevernote.Routers.Home();
    if (!Backbone.history.started) {
        Backbone.history.start();
        Backbone.history.started = true;
    }
  },
};
